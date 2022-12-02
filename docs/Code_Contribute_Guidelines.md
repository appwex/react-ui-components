# Code & Contribute Guidelines

Just a clean and short guideline about how to collaborate.

##### Issue

- Always have an issue raised for every fixes (except hotfixes) or for a new component.
- Always make sure to attach the issue with the Pull Request, by adding `Fixes #{issue-number}` in the PR description.
- If creating an issue, please make sure to add a description or a screenshot.
- If creating an issue for a new component and the design file is available, please share the link (of the of it) in the issue description.
- Always use [React UI Components](https://github.com/orgs/appwex/projects/4/views/1) project board for organizing issues.
- If a developer start working on an issue make sure to move to progress table in the [React UI Components](https://github.com/orgs/appwex/projects/4/views/1) project board.
- If an issue needs more clarification to understand (cannot describe in few words or screenshot), so instead of meetings, we use [loom videos](https://www.loom.com/) to describe it. And add it in Issue description or in the slack channel.

##### Branch

Branch name: `appname`/`username`/`issue-name-in-kebab-case`

- If the app name is too large, use a short name, just like `ruc` (react-ui-components).
- If the username is too large, use a nick name.
- Always use a short name for issue, add extra description in the description box.
- Also attach the issue-number with the first commit message of the new PR, like `Your commit message (#7)`

##### Pull Request

- PR title should be Capitalize.
- Use seprate PRs, for seprate tasks.
- Always have a description or a screenshot (for components) attached.
- Make sure to add `Fixes #{issue-number}` in the description.
- Always add a usage description for reusable components.
- If a developer is still working on a PR, please make sure to add a label `work in progress` on it.
- If a PR is ready for review, make sure to add `ready for review` label.
- If a developer needed help on any PR, please add `help wanted` label, and make sure to ping someone in the slack channel (react-ui-components).
- If want to show something for clarification (cannot describe in few words or screenshot), so instead of meetings, we use [loom videos](https://www.loom.com/) to describe it. And add it in PR description or in the slack channel.

##### Import Groups

```
import { useState, useEffect } from 'react'                   // from react lib
import { useFormik } from 'formik'                            // from other libs

import Button from 'components/button'                        // components
import Card from 'components/card'

import PlusIcon from 'assets/svg/plus.svg'                    // svg icons
import FolderIcon from 'assets/svg/folder.svg'

import { generateRandomString } from 'lib/utils'              // utils

import "./App.css"                                            // stylesheet
```

##### CSS

- Always have a blank line between every selector, for the readablity purpose.
- Use `camelCase` classes names for styling.

##### Standard Code

- Do not leave `console.log` on prod / master, keep it on other personal branch if important.
- We use [`prettier`](https://prettier.io/) for code styles.

##### Merge

- PR will not be merged, before an approval.
- Only Managers can merge Pull Requests.
- Managers, use squash and merge.
