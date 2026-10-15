import { Schema, model } from 'mongoose';

const roleSchema = new Schema({ name:{type:String,required:true,unique:true}, key:{type:String,required:true,unique:true}, description:String, system:{type:Boolean,default:false}, allPermissions:{type:Boolean,default:false} }, { collection:'roles', timestamps:true });
const permissionSchema = new Schema({ code:{type:String,required:true,unique:true,index:true}, module:{type:String,required:true,index:true}, action:{type:String,required:true} }, { collection:'permissions', versionKey:false });
const groupSchema = new Schema({ name:{type:String,required:true,unique:true}, description:String, permissionCodes:{type:[String],default:[]} }, { collection:'permission_groups', timestamps:true });
const rolePermissionSchema = new Schema({ roleId:{type:Schema.Types.ObjectId,required:true,index:true}, permissionCode:{type:String,required:true,index:true} }, { collection:'role_permissions', versionKey:false });
rolePermissionSchema.index({roleId:1,permissionCode:1},{unique:true});
const roleGroupSchema = new Schema({ roleId:{type:Schema.Types.ObjectId,required:true,index:true}, groupId:{type:Schema.Types.ObjectId,required:true,index:true} }, { collection:'role_groups', versionKey:false });
roleGroupSchema.index({roleId:1,groupId:1},{unique:true});
const userRoleSchema = new Schema({ userId:{type:String,required:true,index:true}, roleId:{type:Schema.Types.ObjectId,required:true,index:true} }, { collection:'user_roles', versionKey:false });
userRoleSchema.index({userId:1,roleId:1},{unique:true});
const userPermissionSchema = new Schema({ userId:{type:String,required:true,index:true}, code:{type:String,required:true,index:true}, effect:{type:String,enum:['include','exclude'],required:true} }, { collection:'user_permissions', versionKey:false });
userPermissionSchema.index({userId:1,code:1},{unique:true});
export const RoleModel=model('RbacRole',roleSchema); export const PermissionModel=model('RbacPermission',permissionSchema); export const PermissionGroupModel=model('PermissionGroup',groupSchema); export const RolePermissionModel=model('RolePermission',rolePermissionSchema); export const RoleGroupModel=model('RoleGroup',roleGroupSchema); export const UserRoleModel=model('UserRole',userRoleSchema); export const UserPermissionModel=model('UserPermission',userPermissionSchema);
