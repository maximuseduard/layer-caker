import { HelpCircleIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const faqType = defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'body',
            type: 'blockContent',
        }),
    ],
    icon: HelpCircleIcon,
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title,
                subtitle: 'FAQs',
            };
        },
    },
});
