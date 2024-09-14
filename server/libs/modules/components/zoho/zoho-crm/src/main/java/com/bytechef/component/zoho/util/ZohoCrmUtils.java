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

package com.bytechef.component.zoho.util;

import static com.bytechef.component.definition.ComponentDsl.option;

import com.bytechef.component.definition.ActionContext;
import com.bytechef.component.definition.Context.Http;
import com.bytechef.component.definition.Option;
import com.bytechef.component.definition.Parameters;
import com.bytechef.component.definition.TypeReference;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author Luka Ljubić
 */
public class ZohoCrmUtils {

    private ZohoCrmUtils() {
    }

    public static List<Option<String>> getRoleOptions(
        Parameters inputParameters, Parameters connectionParameters, Map<String, String> stringStringMap, String s,
        ActionContext context) {

        List<Map<String, Object>> body = context
            .http(http -> http.get("/settings/roles"))
            .configuration(Http.responseType(Http.ResponseType.JSON))
            .execute()
            .getBody(new TypeReference<>() {});

        return getOptions(body);
    }

    public static List<Option<String>> getProfileOptions(
        Parameters inputParameters, Parameters connectionParameters, Map<String, String> stringStringMap, String s,
        ActionContext context) {

        List<Map<String, Object>> body = context
            .http(http -> http.get("/settings/profiles"))
            .configuration(Http.responseType(Http.ResponseType.JSON))
            .execute()
            .getBody(new TypeReference<>() {});

        return getOptions(body);
    }

    private static List<Option<String>> getOptions(List<Map<String, Object>> body) {
        List<Option<String>> options = new ArrayList<>();

        for (Object item : body) {
            if (item instanceof Map<?, ?> map) {
                String name = (String) map.get("name");

                options.add(option(name, name));
            }
        }

        return options;
    }
}
