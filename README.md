# storybook-imba-demo

Imba + Storybook 7 integration demo (WIP)

Concept of putting together Storybook and Imba, it still has some rough edges

Usage:

-   `yarn install`
-   `yarn storybook`

Limitations:

-   Imba package is snapshotted to this commit: https://github.com/imba/imba/commit/699e04cb6595fe4a7067815efa896044a076dda1 as there are some changes to the vite plugin since the last package release that are needed here
-   It uses Javascript/Typescript to write stories, for it to support stories written in imba a storyIndexer would have to be created, which requires a way to parse imba into an AST and walk it (similar to the svelte storyIndexer), imba/compiler does not have a lot of documentation of how to do this
-   It uses the web-components Storybook framework as it was the closest one, however this means it always loads lit-html as a dependency from storybook (even though this renderer is not used at all!), you can ignore any storybook warnings related to lit
-   Currently it only passes story args as attributes on the imba component (web component style), it does not pass them as properties.
-   Only tested on hyphenated imba components
-   The source code display is a bit hacky
