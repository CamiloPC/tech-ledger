/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'modules',
        title: 'Módulos',
        subtitle: 'Módulos de contabilidad',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children: [
            {
                id   : 'contacts',
                title: 'Contactos',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/modules/contacts'
            },
            {
                id   : 'products',
                title: 'Productos',
                type : 'basic',
                icon : 'heroicons_outline:shopping-bag',
                link : '/modules/products'
            },
            {
                id   : 'saleInvoices',
                title: 'Facturas',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-list',
                link : '/modules/saleInvoices'
            }
        ]
    }
];


// Example navigation items
// export const defaultNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
