import { VehicleDataInterface } from "./vehicleDataInterface";
import { PropertyDataInterface } from "./propertyDataInterface";

interface coverList {
  propertyData?: PropertyDataInterface;
  vehicleData?: VehicleDataInterface;
}

export interface PolicyDataInterface {
  id: string;
  policytype: string;
  coverList: Array<coverList>;
  imageSrc?: string;
  selected?: boolean;
}