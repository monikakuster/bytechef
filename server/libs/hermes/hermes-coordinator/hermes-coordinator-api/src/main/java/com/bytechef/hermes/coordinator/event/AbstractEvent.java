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

package com.bytechef.hermes.coordinator.event;

import com.bytechef.hermes.coordinator.message.route.TriggerCoordinatorMessageRoute;
import com.bytechef.message.event.MessageEvent;
import java.time.LocalDateTime;

/**
 * @author Ivica Cardic
 */
public abstract class AbstractEvent implements MessageEvent<TriggerCoordinatorMessageRoute> {

    protected LocalDateTime createDate;
    protected TriggerCoordinatorMessageRoute route;

    protected AbstractEvent() {
    }

    public AbstractEvent(TriggerCoordinatorMessageRoute route) {
        this.createDate = LocalDateTime.now();
        this.route = route;
    }

    @Override
    public LocalDateTime getCreateDate() {
        return createDate;
    }

    @Override
    public TriggerCoordinatorMessageRoute getRoute() {
        return route;
    }
}
