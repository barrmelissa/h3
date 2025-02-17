/*
 * Copyright 2017-2018, 2020 Uber Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include <stdlib.h>

#include "h3Index.h"
#include "test.h"

SUITE(cellToParent) {
    GeoPoint sf = {0.659966917655, 2 * 3.14159 - 2.1364398519396};

    TEST(ancestorsForEachRes) {
        H3Index child;
        H3Index comparisonParent;
        H3Index parent;

        for (int res = 1; res < 15; res++) {
            for (int step = 0; step < res; step++) {
                t_assertSuccess(H3_EXPORT(pointToCell)(&sf, res, &child));
                parent = H3_EXPORT(cellToParent)(child, res - step);
                t_assertSuccess(
                    H3_EXPORT(pointToCell)(&sf, res - step, &comparisonParent));

                t_assert(parent == comparisonParent, "Got expected parent");
            }
        }
    }

    TEST(invalidInputs) {
        H3Index child;
        t_assertSuccess(H3_EXPORT(pointToCell)(&sf, 5, &child));

        t_assert(H3_EXPORT(cellToParent)(child, 6) == 0,
                 "Higher resolution fails");
        t_assert(H3_EXPORT(cellToParent)(child, -1) == 0,
                 "Invalid resolution fails");
        t_assert(H3_EXPORT(cellToParent)(child, 15) == 0,
                 "Invalid resolution fails");
        t_assert(H3_EXPORT(cellToParent)(child, 16) == 0,
                 "Invalid resolution fails");
    }
}
