export interface IStaffDeptFormProps {
    deptOptions: any[];
    staffItems: any[];
    deleteStaffItems: (staffItems: any[]) => Promise<void>;
    addStaffItem: (staffId: number, deptId: number, shouldChangeExisting: boolean) => Promise<void>;
    updateStaffItem: (staffItemId: number, staffId: number, deptId: number, shouldChangeExisting: boolean) => Promise<void>;
    updateContractItems: (StaffId: number, DeptId: number) => void;
}
