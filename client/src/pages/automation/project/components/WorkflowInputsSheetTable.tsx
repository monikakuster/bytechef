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
import {WorkflowInputModel, WorkflowModel, WorkflowTestConfigurationModel} from '@/middleware/platform/configuration';
import {useUpdateWorkflowMutation} from '@/mutations/automation/workflows.mutations';
import WorkflowInputsSheetDialog from '@/pages/automation/project/components/WorkflowInputsSheetDialog';
import {WorkflowKeys} from '@/queries/automation/workflows.queries';
import {WorkflowDefinitionType} from '@/types/types';
import {useQueryClient} from '@tanstack/react-query';
import {EditIcon, PlusIcon, SlidersIcon, Trash2Icon} from 'lucide-react';
import {useState} from 'react';

const SPACE = 4;

const WorkflowInputsSheetTable = ({
    projectId,
    workflow,
    workflowTestConfiguration,
}: {
    projectId: number;
    workflow: WorkflowModel;
    workflowTestConfiguration?: WorkflowTestConfigurationModel;
}) => {
    const [currentInputIndex, setCurrentInputIndex] = useState<number>(-1);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const queryClient = useQueryClient();

    const updateWorkflowMutation = useUpdateWorkflowMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: WorkflowKeys.projectWorkflows(projectId),
            });

            queryClient.invalidateQueries({
                queryKey: WorkflowKeys.workflow(workflow.id!),
            });
        },
    });

    function handleDelete(input: WorkflowInputModel) {
        const definitionObject: WorkflowDefinitionType = JSON.parse(workflow.definition!);

        const inputs: WorkflowInputModel[] = definitionObject.inputs ?? [];

        const index = inputs.findIndex((curInput) => curInput.name === input.name);

        inputs.splice(index, 1);

        updateWorkflowMutation.mutate({
            id: workflow.id!,
            workflowModel: {
                definition: JSON.stringify(
                    {
                        ...definitionObject,
                        inputs,
                    },
                    null,
                    SPACE
                ),
                version: workflow.version,
            },
        });

        setShowDeleteDialog(false);
    }

    return (
        <>
            {workflow.inputs && workflow.inputs.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>

                            <TableHead>Label</TableHead>

                            <TableHead>Type</TableHead>

                            <TableHead>Required</TableHead>

                            <TableHead>Test Value</TableHead>

                            <TableHead>
                                <span className="sr-only">Edit</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {workflow.inputs &&
                            workflow.inputs.map((input, index) => (
                                <TableRow key={input.name}>
                                    <TableCell className="p-3">{input.name}</TableCell>

                                    <TableCell className="p-3">{input.label}</TableCell>

                                    <TableCell className="p-3">{input.type}</TableCell>

                                    <TableCell className="p-3">{input.required === true ? 'true' : 'false'}</TableCell>

                                    <TableCell className="p-3">
                                        {workflowTestConfiguration?.inputs
                                            ? workflowTestConfiguration?.inputs[
                                                  workflow.inputs![index]?.name
                                              ]?.toString()
                                            : undefined}
                                    </TableCell>

                                    <TableCell className="flex justify-end p-3">
                                        <WorkflowInputsSheetDialog
                                            inputIndex={index}
                                            projectId={projectId}
                                            triggerNode={
                                                <Button size="icon" variant="ghost">
                                                    <EditIcon className="size-4" />
                                                </Button>
                                            }
                                            workflow={workflow}
                                            workflowTestConfiguration={workflowTestConfiguration}
                                        />

                                        <Button
                                            onClick={() => {
                                                setCurrentInputIndex(index);
                                                setShowDeleteDialog(true);
                                            }}
                                            size="icon"
                                            variant="ghost"
                                        >
                                            <Trash2Icon className="h-4 text-red-600" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            ) : (
                <div className="flex h-full flex-col justify-center">
                    <div className="flex flex-col items-center self-center align-middle">
                        <SlidersIcon className="size-24 text-gray-300" />

                        <h3 className="mt-2 text-sm font-semibold">No inputs</h3>

                        <p className="mt-1 text-sm text-gray-500">Get started by creating a new input.</p>

                        <div className="mt-6">
                            <WorkflowInputsSheetDialog
                                projectId={projectId}
                                triggerNode={
                                    <Button>
                                        <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
                                        New Input
                                    </Button>
                                }
                                workflow={workflow}
                                workflowTestConfiguration={workflowTestConfiguration}
                            />
                        </div>
                    </div>
                </div>
            )}

            <AlertDialog open={showDeleteDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the input.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setShowDeleteDialog(false)}>Cancel</AlertDialogCancel>

                        <AlertDialogAction
                            className="bg-red-600"
                            onClick={() => handleDelete(workflow.inputs![currentInputIndex]!)}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default WorkflowInputsSheetTable;
