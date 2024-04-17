import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {Button} from '@/components/ui/button';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {ApiKeyModel} from '@/middleware/embedded/user';
import {useDeleteApiKeyMutation} from '@/mutations/embedded/apiKeys.mutations';
import ApiKeyDialog from '@/pages/platform/settings/embedded/api-keys/components/ApiKeyDialog';
import {ApiKeyKeys} from '@/queries/embedded/apiKeys.queries';
import {useQueryClient} from '@tanstack/react-query';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table';
import {EditIcon, Trash2Icon} from 'lucide-react';
import {useMemo, useState} from 'react';
import {twMerge} from 'tailwind-merge';

const columnHelper = createColumnHelper<ApiKeyModel>();

interface ApiKeyTableProps {
    apiKeys: ApiKeyModel[];
}

const ApiKeyDeleteDialog = ({apiKeyId, onClose}: {apiKeyId: number; onClose: () => void}) => {
    const queryClient = useQueryClient();

    const deleteApiKeyMutation = useDeleteApiKeyMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ApiKeyKeys.apiKeys,
            });

            onClose();
        },
    });

    const handleClick = () => {
        deleteApiKeyMutation.mutate(apiKeyId);
    };

    return (
        <AlertDialog onOpenChange={onClose} open={true}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the project and workflows it
                        contains.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                    <AlertDialogAction className="bg-red-600" onClick={handleClick}>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

const ApiKeyTable = ({apiKeys}: ApiKeyTableProps) => {
    const [currentApiKey, setCurrentApiKey] = useState<ApiKeyModel>();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);

    const columns = useMemo(
        () => [
            columnHelper.accessor('name', {
                cell: (info) => info.getValue() ?? '',
                header: 'Name',
            }),
            columnHelper.accessor('secretKey', {
                cell: (info) => info.getValue() ?? '',
                header: 'Secret Key',
            }),
            columnHelper.accessor('environment', {
                cell: (info) => info.getValue() ?? '',
                header: 'Environment',
            }),
            columnHelper.accessor('createdDate', {
                cell: (info) => `${info.getValue()?.toLocaleDateString()} ${info.getValue()?.toLocaleTimeString()}`,
                header: 'Created Date',
            }),
            columnHelper.accessor('lastUsedDate', {
                cell: (info) =>
                    `${info.getValue()?.toLocaleDateString() ?? ''} ${info.getValue()?.toLocaleTimeString() ?? ''}`,
                header: 'Last Used Date',
            }),
            columnHelper.display({
                cell: (info) => (
                    <>
                        <Button
                            onClick={() => {
                                setCurrentApiKey(info.row.original);
                                setShowEditDialog(true);
                            }}
                            size="icon"
                            variant="ghost"
                        >
                            <EditIcon className="size-4" />
                        </Button>

                        <Button
                            onClick={() => {
                                setCurrentApiKey(info.row.original);
                                setShowDeleteDialog(true);
                            }}
                            size="icon"
                            variant="ghost"
                        >
                            <Trash2Icon className="h-4 text-red-600" />
                        </Button>
                    </>
                ),
                header: '',
                id: 'actions',
            }),
        ],
        []
    );

    const reactTable = useReactTable<ApiKeyModel>({
        columns,
        data: apiKeys,
        getCoreRowModel: getCoreRowModel(),
    });

    const headerGroups = reactTable.getHeaderGroups();
    const rows = reactTable.getRowModel().rows;

    return (
        <div className="w-full space-y-4 px-4 2xl:w-4/5">
            <p>
                Your secret API keys are listed below. Please note that we do not display your secret API keys again
                after you generate them.
            </p>

            <p>
                Do not share your API key with others, or expose it in the browser or other client-side code. In order
                to protect the security of your account, ByteChef may also automatically disable any API key that we
                have found has leaked publicly.
            </p>

            <Table className="table-auto">
                <TableHeader>
                    {headerGroups.map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead
                                    className="sticky top-0 z-10 bg-white p-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    key={header.id}
                                >
                                    {!header.isPlaceholder &&
                                        flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody className="divide-y divide-gray-200 bg-white">
                    {rows.map((row) => (
                        <TableRow className="cursor-pointer" key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell
                                    className={twMerge(
                                        'whitespace-nowrap p-3',
                                        cell.id.endsWith('actions') && 'flex justify-end',
                                        cell.id.endsWith('enabled') && 'flex ml-6'
                                    )}
                                    key={cell.id}
                                    onClick={(event) => {
                                        if (cell.id.endsWith('actions')) {
                                            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                                            const target = event.target as any;

                                            if (target.getAttribute('data-action') === 'delete') {
                                                setCurrentApiKey(apiKeys[target.getAttribute('data-index')]);

                                                setShowDeleteDialog(true);
                                            } else if (target.getAttribute('data-action') === 'edit') {
                                                setCurrentApiKey(apiKeys[target.getAttribute('data-index')]);

                                                setShowEditDialog(true);
                                            }
                                        }
                                    }}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {showDeleteDialog && currentApiKey && (
                <ApiKeyDeleteDialog apiKeyId={currentApiKey.id!} onClose={() => setShowDeleteDialog(false)} />
            )}

            {showEditDialog && <ApiKeyDialog apiKey={currentApiKey} onClose={() => setShowEditDialog(false)} />}
        </div>
    );
};

export default ApiKeyTable;
