/*
 * Copyright 2021 <your company/name>.
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

package com.integri.atlas.task.handler.mysql;

import static com.integri.atlas.task.definition.dsl.DSL.option;
import static com.integri.atlas.task.handler.mysql.MySQLTaskConstants.TASK_MYSQL;

import com.integri.atlas.task.definition.TaskDefinitionHandler;
import com.integri.atlas.task.definition.dsl.DSL;
import com.integri.atlas.task.definition.dsl.TaskDefinition;
import com.integri.atlas.task.handler.jdbc.JdbcTaskConstants;
import org.springframework.stereotype.Component;

/**
 * @author Ivica Cardic
 */
@Component
public class MySQLTaskDefinition implements TaskDefinitionHandler {

    private static final TaskDefinition TASK_DEFINITION = DSL
        .create(TASK_MYSQL)
        .displayName("MySQL")
        .description("Query, insert nd update data from MySQL.")
        .auth(option("MySQL", "MYSQL"))
        .operations(JdbcTaskConstants.TASK_OPERATIONS);

    @Override
    public TaskDefinition getTaskDefinition() {
        return TASK_DEFINITION;
    }
}
