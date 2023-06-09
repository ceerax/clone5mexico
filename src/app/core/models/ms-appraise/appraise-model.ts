export interface IViewComerAvaluo {
  idEvent: number;
  idAppraisal: number;
  keyAppraisal: string;
  keyOffice: string;
  userInsert: string;
  noDelegation: number;
  insertDate: Date;
  address: string;
  descAddressAppraisal: string;
  idDetAppraisal: number;
  noGood: number;
  description: string;
  status: string;
  noClasifGood: number;
  noType: number;
  descType: string;
  noSubtype: number;
  descSubtype: string;
  noSsubtype: number;
  descSsubtype: string;
  noSssubType: number;
  descSssubType: string;
  apraisalDate: Date;
  dateVigAppraisal: Date;
  statusAppraisal: string;
  daysLeft: number;
  nameAppraiser: string;
  typeReference: string;
  apt: string;
  descApt: string;
  iva: number;
  valorRefInmediate: number;
  valueRefInmediateIva: number;
  valueRefInmediataRounded: number;
  valueCommercial: number;
  valueCommercialIva: number;
  valueTerrain: number;
  valueConstruction: number;
  valueConstructionEat: number;
  valueInstSpecials: number;
  valueOthers: number;
  discountVri: number;
  discountIva: number;
  opinion: string;
  opinionDate: Date;
  vigOpenDate: Date;
  valRefInm: number;
  valRefInmIva: number;
  discount: string;
  porcTerrain: number;
  porcConstrHab: number;
  porcConstrEat: number;
  porcInstEsp: number;
  porcOthers: number;
  porcTotal: number;
  rateIvaTerrain: number;
  rateIvaConstrHab: number;
  rateIvaConstEat: number;
  rateIvaInstEsp: number;
  rateIvaOthers: number;
  approved: string;
  observations: string;
}

export interface IAppraisalMonitor {
  id: number;
  requestDate: Date;
  sourceUser: string;
  targetUser: string;
  requestType: string;
  paid: string;
  cveCurrencyCost: string;
  cveCurrencyAppraisal: string;
  observations: string;
  noAppraiser: number;
  noExpert: number;
  noRegister: number;
}
