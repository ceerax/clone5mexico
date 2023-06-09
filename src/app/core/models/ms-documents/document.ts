export class IDocument {
  id: number;
  natureDocument: string;
  descriptionDocument: string | null;
  significantDate: string | null;
  scanStatus: string | null;
  fileStatus: string | null;
  userRequestsScan: string | null;
  scanRequestDate: Date;
  userRegistersScan: string | null;
  dateRegistrationScan: Date;
  userReceivesFile: string | null;
  dateReceivesFile: Date | null;
  keyTypeDocument: string | null;
  keySeparator: string | null;
  numberProceedings: number | null;
  sheets: number | null;
  numberDelegationRequested: number | null;
  numberSubdelegationRequests: number | null;
  numberDepartmentRequest: number | null;
  registrationNumber: number | null;
  flyerNumber: number | null;
  userSend: string | null;
  areaSends: number | null;
  sendDate: Date;
  sendFilekey: string | null;
  userResponsibleFile: string | null;
  mediumId: number | null;
  associateUniversalFolio: number | null;
  dateRegistrationScanningHc: Date;
  dateRequestScanningHc: Date;
  goodNumber: number | null;
  file?: null;
  selectedDate?: string;
}
