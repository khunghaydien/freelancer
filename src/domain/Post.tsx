export type JobTitle = 'Bán thời gian' | 'Toàn thời gian' | 'Cuộc thi';
export const JOB_TITLE = {
    PartTime: 'partTime',
    FullTime: 'fullTime',
    Competition: 'competition',
};
export type Post = {
    id: string,
    posterId: string,
    title: string,
    type: string,
    description: string,
    service: string,
    startDate: string,
    endDate: string,
}
export const postList = [{
    id: '1',
    posterId: '1',
    title: 'Thiết kế logo tinh tế cho công ty chuyên thiết kế, thi công nội ngoại thất',
    type: 'Cuộc thi',
    description:`. Công ty Kiến Trúc Vàng - chuyên thiết kế + thi công xây dựng nhà, làm đồ gỗ nội thất và trang trí nhà cửa

    . Logo là viết tắt của 3 chữ KTV hoặc chỉ 1 chữ K
    
    . Logo có xem kẽ hình ảnh của một ngôi nhà
    
    . Logo tinh tế, hiện đại và đẳng cấp`, 
    service:'Thiết kế Logo',
    startDate:'12:12:21 19/05/2015', 
    endDate:'12:12:21 31/05/2023',
},
{
    id:'2',
    posterId: '1',
    title: 'Customs Code APP VPN upstream proxy http/socks ( có sẳn source code socks )',
    type: 'Bán thời gian',
    description:`Chào bạn,

    Mình có sẳn bộ source ở đây, nhưng chỉ dùng đc cho proxy type=socks
    
    Mình muốn customs code lại sao cho dùng đc thêm proxy type=http,https
    
    https://github.com/bndeff/socksdroid
    
    Cảm ơn !`, 
    service:'Làm mobile app theo yêu cầu',
    startDate:'12:12:21 19/05/2015', 
    endDate:'12:12:21 31/05/2023',
},
]