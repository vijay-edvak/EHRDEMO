import { Schema, model } from 'mongoose';
const departmentSchema=new Schema({name:{type:String,required:true,unique:true},managerUserId:String,active:{type:Boolean,default:true},createdBy:String,updatedBy:String},{collection:'departments',timestamps:true});
export const DepartmentModel=model('Department',departmentSchema);
