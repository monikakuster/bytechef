/*
 * Copyright 2023-present ByteChef Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytechef.component.httpclient.constant;

import static com.bytechef.hermes.component.definition.ComponentDSL.fileEntry;
import static com.bytechef.hermes.component.definition.Context.Http.BodyContentType;
import static com.bytechef.hermes.component.definition.Context.Http.ResponseType;
import static com.bytechef.hermes.definition.DefinitionDSL.array;
import static com.bytechef.hermes.definition.DefinitionDSL.bool;
import static com.bytechef.hermes.definition.DefinitionDSL.date;
import static com.bytechef.hermes.definition.DefinitionDSL.dateTime;
import static com.bytechef.hermes.definition.DefinitionDSL.integer;
import static com.bytechef.hermes.definition.DefinitionDSL.nullable;
import static com.bytechef.hermes.definition.DefinitionDSL.number;
import static com.bytechef.hermes.definition.DefinitionDSL.object;
import static com.bytechef.hermes.definition.DefinitionDSL.option;
import static com.bytechef.hermes.definition.DefinitionDSL.string;
import static com.bytechef.hermes.definition.DefinitionDSL.time;

import com.bytechef.hermes.component.definition.Context;
import com.bytechef.hermes.component.definition.OutputSchemaDataSource;
import com.bytechef.hermes.definition.DefinitionDSL.ModifiableProperty.ModifiableInputProperty;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * @author Ivica Cardic
 */
public class HttpClientConstants {

    public static final String ALLOW_UNAUTHORIZED_CERTS = "allowUnauthorizedCerts";
    public static final String BODY_CONTENT = "bodyContent";
    public static final String BODY_CONTENT_MIME_TYPE = "bodyContentMimeType";
    public static final String BODY_CONTENT_TYPE = "bodyContentType";
    public static final String DELETE = "delete";
    public static final String FOLLOW_ALL_REDIRECTS = "followAllRedirects";
    public static final String FOLLOW_REDIRECT = "followRedirect";
    public static final String FULL_RESPONSE = "fullResponse";
    public static final String HEAD = "head";
    public static final String HEADERS = "headers";
    public static final String HTTP_CLIENT = "httpClient";
    public static final String GET = "get";
    public static final String IGNORE_RESPONSE_CODE = "ignoreResponseCode";
    public static final String PATCH = "patch";
    public static final String POST = "post";
    public static final String PROXY = "proxy";
    public static final String PUT = "put";
    public static final String QUERY_PARAMETERS = "queryParameters";
    public static final String RESPONSE_FILENAME = "responseFilename";
    public static final String RESPONSE_FORMAT = "responseType";
    public static final String TIMEOUT = "timeout";
    public static final String URI = "uri";

    public static final List<? extends ModifiableInputProperty> BODY_CONTENT_PROPERTIES = Collections.unmodifiableList(
        Arrays.asList(
            object(BODY_CONTENT)
                .label("Body Content - JSON")
                .description("Body Parameters to send.")
                .displayCondition("%s === '%s'".formatted(BODY_CONTENT_TYPE, BodyContentType.JSON.name()))
                .additionalProperties(
                    array(), bool(), date(), dateTime(), integer(), nullable(), number(), object(), string(), time())
                .placeholder("Add Parameter"),
            object(BODY_CONTENT)
                .label("Body Content - XML")
                .description("XML content to send.")
                .displayCondition("%s === '%s'".formatted(BODY_CONTENT_TYPE, BodyContentType.XML.name()))
                .placeholder("Add Parameter"),
            object(BODY_CONTENT)
                .label("Body Content - Form Data")
                .description("Body parameters to send.")
                .displayCondition("%s === '%s'".formatted(BODY_CONTENT_TYPE, BodyContentType.FORM_DATA.name()))
                .placeholder("Add Parameter")
                .additionalProperties(string(), fileEntry()),
            object(BODY_CONTENT)
                .label("Body Content - Form URL-Encoded")
                .description("Body parameters to send.")
                .displayCondition("%s === '%s'".formatted(BODY_CONTENT_TYPE, BodyContentType.FORM_URL_ENCODED.name()))
                .placeholder("Add Parameter")
                .additionalProperties(string()),
            string(BODY_CONTENT)
                .label("Body Content - Raw")
                .description("The raw text to send.")
                .displayCondition("%s === '%s'".formatted(BODY_CONTENT_TYPE, BodyContentType.RAW.name())),
            fileEntry(BODY_CONTENT)
                .label("Body Content - Binary")
                .description("The object property which contains a reference to the file to upload.")
                .displayCondition("%s === '%s'".formatted(BODY_CONTENT_TYPE, BodyContentType.BINARY.name()))));

    public static final OutputSchemaDataSource.OutputSchemaFunction OUTPUT_PROPERTIES =
        (inputParameters, connection, context) -> {
            if (inputParameters.getBoolean(FULL_RESPONSE, false)) {
                return object()
                    .properties(any("body"), object("headers"), integer("status"));
            } else {
                return any()
                    .displayCondition("%s === true".formatted(FULL_RESPONSE));
            }
        };

    public static final List<? extends ModifiableInputProperty> COMMON_PROPERTIES = Collections.unmodifiableList(
        Arrays.asList(

            //
            // General properties
            //

            string(URI)
                .label("URI")
                .description("The URI to make the request to")
                .placeholder("https://example.com/index.html")
                .defaultValue("")
                .required(true),
            bool(ALLOW_UNAUTHORIZED_CERTS)
                .label("Allow Unauthorized Certs")
                .description("Download the response even if SSL certificate validation is not possible.")
                .defaultValue(false),
            string(RESPONSE_FORMAT)
                .label("Response Format")
                .description("The format in which the data gets returned from the URL.")
                .options(
                    option(
                        "JSON",
                        ResponseType.JSON.name(),
                        "The response is automatically converted to object/array."),
                    option(
                        "XML",
                        Context.Http.ResponseType.XML.name(),
                        "The response is automatically converted to object/array."),
                    option("Text", ResponseType.TEXT.name(), "The response is returned as a text."),
                    option(
                        "File", ResponseType.BINARY.name(),
                        "The response is returned as a file object."))
                .defaultValue(ResponseType.JSON.name()),
            string(RESPONSE_FILENAME)
                .label("Response Filename")
                .description("The name of the file if the response is returned as a file object.")
                .displayCondition("%s === '%s'".formatted(RESPONSE_FORMAT, ResponseType.BINARY.name())),

            //
            // Header properties
            //

            object(HEADERS)
                .label("Headers")
                .description("Headers to send.")
                .placeholder("Add header")
                .additionalProperties(string()),

            //
            // Query parameters properties
            //

            object(QUERY_PARAMETERS)
                .label("Query Parameters")
                .description("Query parameters to send.")
                .placeholder("Add parameter")
                .additionalProperties(string())));
}
