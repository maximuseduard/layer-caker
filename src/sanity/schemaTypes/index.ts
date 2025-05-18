import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { faqsType } from './blocks/faqsType';
import { faqType } from './blocks/faqType';
import { featuresType } from './blocks/featuresType';
import { heroType } from './blocks/heroType';
import { splitImageType } from './blocks/splitImageType';
import { pageBuilderType } from './pageBuilderType';
import { pageType } from './pageType';
import { siteSettingsType } from './siteSettingsType';
import { seoType } from './seoType';
import { redirectType } from './redirectType';
import { socialType } from './socialType';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        blockContentType,
        categoryType,
        postType,
        authorType,
        pageType,
        pageBuilderType,
        faqType,
        faqsType,
        featuresType,
        heroType,
        splitImageType,
        siteSettingsType,
        seoType,
        redirectType,
        socialType,
    ],
};
