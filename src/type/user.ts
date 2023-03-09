export interface ListInt {
    id: number;
    nickName: string;
    role: RoleInt[];
    userName: string;
}

interface RoleInt {
    role: number;
    roleName: string;
}

interface SelectDataInt {
    role: number;
    nickName: string;
}

interface RoleListInt {
    authority: number[];
    roleId: number;
    roleName: string;
}

export class InitData {
    selectData: SelectDataInt = {
        nickName: "",
        role: 0,
    };
    list: ListInt[] = []; // 接收用户信息的列表
    roleList: RoleListInt[] = []; // 接收角色信息列表
}
