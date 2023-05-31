export type SitebarItem = {
    menuId: string,
    name?: string,
    id?: string,
    children?: Menu[]
}
export type SitebarProps = {
    sidebarList: SitebarItem[]
}
export type Menu = {
    name: string,
    id: string,
    position: number
}
export const menuList = [
    {
        name: 'Quản lý cho khách hàng',
        id: 'client',
        position: 0
    },
    {
        name: 'Quản lý cho Freelancer',
        id: 'freelancer',
        position: 1
    },
    {
        name: 'Cài đặt chung',
        id: 'setting',
        position: 2
    },
]

export const sidebarList = [
    {
        menuId: 'client',
        children: [
            {
                name: 'Quản lý tin tuyển dụng',
                id: 'job-postings',
                position: 0,
            },
            {
                name: 'Quản lý đơn hàng',
                id: 'orders',
                position: 0,
            }
        ]
    },
    {
        menuId: 'freelancer',
        children: [
            {
                name: 'Quản lý việc nhận làm',
                id: 'jobs',
                position: 0,
            },
            {
                name: 'Quản lý gói dịch vụ và đơn hàng',
                id: 'services-and-orders',
                position: 0,
            }
        ]
    },
    {
        menuId: 'setting',
        children:[
            {
                name: 'Tài khoản',
                id: 'account',
                position: 0,
            },
            {
                name: 'Cài đặt chung',
                id: 'setting',
                position: 1,
            },
            {
                name: 'Nâng cấp gói freelancer',
                id: 'freelancer-update',
                position: 2,
            },
            {
                name: 'Nâng cấp gói khách hàng',
                id: 'client-update',
                position: 3,
            },
            {
                name: 'Mời bạn bè',
                id: 'invite-friend',
                position: 4,
            },
            {
                name: 'Tài khoản ngân hàng',
                id: 'bank-account',
                position: 5,
            },
            {
                name: 'Giao dịch tiền',
                id: 'transaction',
                position: 6,
            },
            {
                name: 'Rút tiền',
                id: 'withdraw',
                position: 7,
            }
        ]
    },
]