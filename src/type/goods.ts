export interface ListInt {
    userId: number;
    id: number;
    title: string;
    introduce: string;
}

interface selectDataInt {
    title: string;
    introduce: string;
    page: number; //页码
    count: number; //总条数
    pagesize: number; // 每页显示条数
}

export class InitData {
    selectData: selectDataInt = {
        title: "",
        introduce: "",
        page: 1,
        count: 0,
        pagesize: 8,
    };
    list: ListInt[] = []; //展示的内容数据
}
