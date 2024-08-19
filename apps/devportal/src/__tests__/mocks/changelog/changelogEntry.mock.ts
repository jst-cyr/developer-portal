import { ChangelogEntry } from '@scdp/changelog/types';

export const mockedChangelogEntry: ChangelogEntry = {
  id: 'FhtEs6vt80qgrzCuP5nxdA',
  name: '10.25 - MDOC-4964 - Fixed issues in Content Hub July 12, 2024',
  readMoreLink: 'null',
  title: 'Fixed issues in Content Hub July 12, 2024',
  description:
    '<ul><li><p>Pages composed solely of HTML components are now rendered in React instead of Knockout (MONE-45370).</p></li><li><p>We’ve implemented a new, more lightweight rich text editor to provide improved performance and security (MONE-44782/MONE-46214).</p></li><li><p>The <strong>More options</strong> menu is now properly hidden when there are no child operations (MONE-36606/MONE-45657).</p></li><li><p>Visibility configuration of table headers for the search component now works as intended (MONE-45099).</p></li><li><p>Error messages for mandatory number fields are now displayed correctly (MONE-45652).</p></li><li><p>Error handling when previewing unsupported 3D files has been improved (MONE-45923).</p></li><li><p>When you persist entity definitions through the Web SDK or the Scripting SDK, conditional validations are now properly preserved (<u>MONE-46035</u>).</p></li><li><p>All saved search dialogs now include a useful title (MONE-45658).</p></li><li><p>Refreshing renditions while the <strong>File History</strong> flag is enabled for a specific asset now updates the public links of all historical files for that asset (MONE-44701).</p></li><li><p>When performing the <strong>Refresh renditions</strong> operation, expired public links are no longer refreshed (MONE-45877).</p></li><li><p>Issues fixed in the <a target="_blank" rel="noopener noreferrer nofollow" class="cc-1rn59kg" href="https://developers.sitecore.com/changelog/content-hub/new-edit-in-table-ui-(preview)">New Edit in table UI (<strong>PREVIEW</strong>):</a></p><ul><li><p>Conditional fields are now editable (MONE-45671).</p></li></ul><ul><li><p>Mass edit tables now load correctly on details pages (MONE-45679).</p></li></ul></li></ul>',
  fullArticle: null,
  breakingChange: false,
  sitecoreProduct: [
    {
      id: '8OiTP5UKXE-RRpU17Vpq4A',
      productName: 'Content Hub',
      productDescription: '',
      darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
      lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
    },
  ],
  scheduled: false,
  changeType: [
    {
      id: 'jNZQWrssyEaU7gwlIYpJnQ',
      name: 'Resolved',
      changeType: 'Resolved',
      type: 'Resolved',
    },
  ],
  version: '',
  releaseDate: 'Jul 12, 2024',
  image: [],
  lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
  darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
  productName: 'Content Hub',
  products: [
    {
      id: '8OiTP5UKXE-RRpU17Vpq4A',
      productName: 'Content Hub',
      productDescription: '',
      darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
      lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
    },
  ],
  status: {
    id: 'pNOVO2dhtESFOSwd4Va84w',
    name: 'Available',
    identifier: 'available',
    description: '',
  },
  changeTypeName: 'Resolved',
};

export const mockedChangelogEntries: ChangelogEntry[] = [
  {
    id: 'j4Sio-l0yEejjBlFM44DAg',
    name: 'Forms',
    readMoreLink: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/forms.html',
    title: 'In Forms, make a file upload item visible based on conditional logic',
    description:
      '<p>You can now <a target="_blank" rel="noopener noreferrer nofollow" href="https://doc.sitecore.com/xmc/en/users/xm-cloud/configure-field-items.html#configure-a-file-upload-field">hide a file upload field item</a>. This means that you can now apply conditional logic to a file uploader that causes it to only appear on the form when specific conditions are met.</p>',
    fullArticle: null,
    breakingChange: false,
    sitecoreProduct: [
      {
        id: 'av_GqshF5U2kL8XMGjf-Xw',
        productName: 'XM Cloud',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
      },
    ],
    scheduled: false,
    changeType: [
      {
        id: 'UKvjuaa7QEC3ipciF1O_ag',
        name: 'Improvement',
        changeType: 'Improvement',
        type: '',
      },
    ],
    version: '',
    releaseDate: 'Jul 24, 2024',
    image: [],
    lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
    darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
    productName: 'XM Cloud',
    products: [
      {
        id: 'av_GqshF5U2kL8XMGjf-Xw',
        productName: 'XM Cloud',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
      },
    ],
    status: {
      id: 'pNOVO2dhtESFOSwd4Va84w',
      name: 'Available',
      identifier: 'available',
      description: '',
    },
    changeTypeName: 'Improvement',
  },
  {
    id: 'XoKnYtIdGEWZg96UAOSH2g',
    name: 'MVC artifacts temporarily restored in base image 1.6.46',
    readMoreLink: '',
    title: 'Action required: MVC artifacts temporarily restored in base image 1.6.46',
    description:
      '<p>In a previous base image release of XM Cloud (version 1.6.15), the following MVC artifacts were removed:</p><ul><li><p>Layouts</p></li><li><p>Templates</p></li><li><p>Placeholder settings</p></li><li><p>PowerShell scripts</p></li><li><p>Items required for Experience Editor UI for MVC renderings</p></li><li><p>Themes: Basic2, Wireframe, Wireframe-deprecated</p></li></ul><p>Because these artifacts are still used by some customers, we are temporarily making them available again starting from base image 1.6.46. However, we plan to remove them again when they are no longer required.</p><p><strong>Action required:</strong> </p><p>Check the list of restored artifacts and make sure that your solution does not depend on any of them. If it does depend on any of them, we strongly recommend <a target="_blank" rel="noreferrer noopener" class="fui-Link ___1rxvrpe f2hkw1w f3rmtva f1ewtqcl fyind8e f1k6fduh f1w7gpdv fk6fouc fjoy568 figsok6 f1hu3pq6 f11qmguv f19f4twv f1tyq0we f1g0x7ka fhxju0i f1qch9an f1cnd47f fqv5qza f1vmzxwi f1o700av f13mvf36 f1cmlufx f9n3di6 f1ids18y f1tx3yz7 f1deo86v f1eh06m1 f1iescvh fhgqx19 f1olyrje f1p93eir f1nev41a f1h8hb77 f1lqvz6u f10aw75t fsle3fq f17ae5zn" href="https://developers.sitecore.com/learn/faq/xm-cloud/sxa#will-xm-cloud-support-existing-mvcsxa-solutions">moving away from MVC-based SXA renderings</a> to a scalable, SaaS solution.</p>',
    fullArticle: null,
    breakingChange: false,
    sitecoreProduct: [
      {
        id: 'av_GqshF5U2kL8XMGjf-Xw',
        productName: 'XM Cloud',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
      },
    ],
    scheduled: false,
    changeType: [
      {
        id: 'jNZQWrssyEaU7gwlIYpJnQ',
        name: 'Resolved',
        changeType: 'Resolved',
        type: '',
      },
    ],
    version: '',
    releaseDate: 'Jul 23, 2024',
    image: [],
    lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
    darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
    productName: 'XM Cloud',
    products: [
      {
        id: 'av_GqshF5U2kL8XMGjf-Xw',
        productName: 'XM Cloud',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
      },
    ],
    status: {
      id: 'pNOVO2dhtESFOSwd4Va84w',
      name: 'Available',
      identifier: 'available',
      description: '',
    },
    changeTypeName: 'Resolved',
  },
  {
    id: 'hp9VE2UqZkS7wCgw8tuCnQ',
    name: '1.6.46 base image updates',
    readMoreLink: '',
    title: '1.6.46 base image updates',
    description:
      '<p>The latest base image release, up to 1.6.46, includes the following improvements:  </p><ul><li><p>When you create a site collection, a new headless module with the same name is now created automatically. You can find it in <code>/sitecore/system/Settings/Project/[COLLECTION_NAME]</code>. This enables you to clone components directly into the site collection project layer without having to manually create the module. This change only applies to newly created site collections.  </p></li></ul><ul><li><p>The Edge preview schema now supports <a target="_blank" rel="noopener noreferrer nofollow" href="https://doc.sitecore.com/xmc/en/developers/xm-cloud/query-examples-for-the-delivery-api.html#get-dictionary-entries">querying dictionary entities</a>.</p></li><li><p>A minor improvement in publishing performance thanks to the removal of the unnecessary <code>AddLanguagesToQueue</code> processor from the publishing pipeline. </p></li></ul><p>In addition, we fixed the following issues: </p><ul><li><p>The language fallback version sometimes wasn’t available after publishing to Edge. </p></li></ul><ul><li><p>In shared sites, when using a pipe (“|”) operator in the source query for a multiroot treelist field, site roots were duplicated. Example query: <br><code>“query:$site/*[@@name=&apos;Data&apos;]/*[@@templatename=&apos;Template Name&apos;] | query:$sharedSites/*[@@name=&apos;Data&apos;]/*[@@templatename=&apos;Template Name&apos;]&quot;</code> </p></li></ul><ul><li><p>Whenever a rendering was cloned, the <strong>Rendering Parameters</strong> template was created with the same name as the <strong>Datasource</strong> template, causing template projection issues. Now, each template type is created with a unique name during the cloning process. </p></li></ul>',
    fullArticle: null,
    breakingChange: false,
    sitecoreProduct: [
      {
        id: 'av_GqshF5U2kL8XMGjf-Xw',
        productName: 'XM Cloud',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
      },
    ],
    scheduled: false,
    changeType: [
      {
        id: 'UKvjuaa7QEC3ipciF1O_ag',
        name: 'Improvement',
        changeType: 'Improvement',
        type: '',
      },
      {
        id: 'jNZQWrssyEaU7gwlIYpJnQ',
        name: 'Resolved',
        changeType: 'Resolved',
        type: '',
      },
    ],
    version: '',
    releaseDate: 'Jul 23, 2024',
    image: [],
    lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
    darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
    productName: 'XM Cloud',
    products: [
      {
        id: 'av_GqshF5U2kL8XMGjf-Xw',
        productName: 'XM Cloud',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
      },
    ],
    status: {
      id: 'pNOVO2dhtESFOSwd4Va84w',
      name: 'Available',
      identifier: 'available',
      description: '',
    },
    changeTypeName: 'Improvement',
  },
  {
    id: '0uYMWlsdMUmmHD7wGsEbCA',
    name: 'MDOC-5034 - Fixed issues in Content Hub July 22, 2024',
    readMoreLink: '',
    title: 'Fixed issues in Content Hub July 22, 2024',
    description: '<ul><li><p>Dynamic filters in search results now work as intended. <em>(MONE-46539)</em></p></li></ul>',
    fullArticle: null,
    breakingChange: false,
    sitecoreProduct: [
      {
        id: '8OiTP5UKXE-RRpU17Vpq4A',
        productName: 'Content Hub',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
      },
    ],
    scheduled: false,
    changeType: [
      {
        id: 'jNZQWrssyEaU7gwlIYpJnQ',
        name: 'Resolved',
        changeType: 'Resolved',
        type: '',
      },
    ],
    version: '',
    releaseDate: 'Jul 22, 2024',
    image: [],
    lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
    darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
    productName: 'Content Hub',
    products: [
      {
        id: '8OiTP5UKXE-RRpU17Vpq4A',
        productName: 'Content Hub',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
      },
    ],
    status: {
      id: 'pNOVO2dhtESFOSwd4Va84w',
      name: 'Available',
      identifier: 'available',
      description: '',
    },
    changeTypeName: 'Resolved',
  },
  {
    id: 'CIbe2wzhO0OPV8pRnKshLg',
    name: 'New Feature: New Date and time condition available',
    readMoreLink: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/specifying-variables-for-conditions.html',
    title: 'New Feature: New Date and time condition available',
    description:
      '<p>We added a new Date and time condition to <a target="_blank" rel="noopener noreferrer nofollow" href="https://doc.sitecore.com/xmc/en/users/xm-cloud/specifying-variables-for-conditions.html">XM Cloud</a> and <a target="_blank" rel="noopener noreferrer nofollow" href="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/out-of-the-box-conditions.html">Personalize</a>, addressing the need for more precise control over date and time personalization within a single condition. This reduces the need for adding multiple conditions to set-up personalization.</p><ul><li><p><strong>Example Condition:</strong></p><ul><li><p>&quot;The visit is after 01:Jul:2024 12:00.&quot;</p></li></ul></li></ul><ul><li><p><strong>Adjustments:</strong></p><ul><li><p>Users no longer need to reconfigure conditions post-launch to ensure the page continues to load correctly in the days following a release.</p></li></ul></li><li><p><strong>Availability:</strong></p><ul><li><p>This is an out-of-the-box condition available in XM Cloud and Personalize.</p></li><li><p>This functionality is not supported on the Edge.</p></li></ul></li></ul><p>We believe this enhancement will significantly improve the flexibility and precision of your page release configurations, making it easier to manage time-sensitive content and campaigns.</p><p></p>',
    fullArticle: null,
    breakingChange: false,
    sitecoreProduct: [
      {
        id: 'uAwJlln4BUqyOtpExq1O5g',
        productName: 'Personalize',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-personalize-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-personalize',
      },
      {
        id: 'av_GqshF5U2kL8XMGjf-Xw',
        productName: 'XM Cloud',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
      },
    ],
    scheduled: false,
    changeType: [],
    version: '',
    releaseDate: 'Jul 19, 2024',
    image: [
      {
        id: 'aeZobZ4LC0eLsCE_ueHsoA',
        name: 'ootbdatetime.png',
        fileName: 'ootbdatetime.png',
        fileUrl: 'https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/da693ca9-8504-4b34-319a-08db21b77927/3cf1860ea0d04caf8b1df611c82f46a2',
        description: '',
        fileWidth: 827,
        fileHeight: 231,
        fileId: '3cf1860ea0d04caf8b1df611c82f46a2',
        fileSize: '14991',
        fileType: 'image/png',
      },
    ],
    lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-personalize',
    darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-personalize-dark',
    productName: 'Personalize',
    products: [
      {
        id: 'uAwJlln4BUqyOtpExq1O5g',
        productName: 'Personalize',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-personalize-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-personalize',
      },
      {
        id: 'av_GqshF5U2kL8XMGjf-Xw',
        productName: 'XM Cloud',
        productDescription: '',
        darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
        lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
      },
    ],
    status: {
      id: 'pNOVO2dhtESFOSwd4Va84w',
      name: 'Available',
      identifier: 'available',
      description: '',
    },
    changeTypeName: null,
  },
];