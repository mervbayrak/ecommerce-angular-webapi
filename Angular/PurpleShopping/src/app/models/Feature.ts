export class Feature {
  id: number;
  price: number;
  unitInStock: number;
  paymentOptions: number;
  featureElectronics: FeatureElectronic[];
}
export class FeatureElectronic {
  id: number;
  featureId: number;
  internalMemory: string;
  screenSize: string;
  ramCapacity: string;
  batteryPower: string;
  cameraResolution: string;
}
