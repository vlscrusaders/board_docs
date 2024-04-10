/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  generalSidebar: [
    {
      type: 'autogenerated',
      dirName: 'general'
    }
  ],
  bylawSidebar: [
    {
      type: 'autogenerated',
      dirName: 'bylaws'
    }
  ],
  policySidebar: [
    {
      type: 'autogenerated',
      dirName: 'policy-old'
    }
  ],
  // tutorialSidebar: [
  //     {
  //     type: 'category',
  //     label: 'tutorial-basics',
  //     items: [
  //       {
  //         type: 'autogenerated',
  //         dirName: 'tutorial-basics'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'category',
  //     label: 'tutorial-extras',
  //     items: [
  //       {
  //         type: 'autogenerated',
  //         dirName: 'tutorial-extras'
  //       }
  //     ]
  //   },
  // ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
