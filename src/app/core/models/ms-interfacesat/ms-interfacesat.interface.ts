export interface IDinamicQueryParams {
  officeKey?: string;
  asunto?: string;
  expType?: string;
  missingAttribute?: string;
  saeIdTransferencia?: string;
}
export interface IMassiveParams {
  p_no_oficio?: string;
  p_no_volante?: string;
  p_no_expediente?: string;
  p_sat_tipo_exp?: string;
  asunto_sat?: string;
  p_indicador_sat?: string;
  p_av_previa?: string;
  iden?: string;
  no_transferente?: string;
  desalojo?: string;
}
export interface ISatTransfer {
  satOnlyKey: string;
  satDeterminant: string;
  satofictransfNumber: number;
  satTransfDate: Date;
  satCoordregsae: string;
  satCoordregional: string;
  satEntidadTransferee: number;
  satOfficialEnttransf: string;
  satPositionTransferee: string;
  satLocationStore: string;
  satAlmDirection: string;
  satAlmCologne: string;
  satAlmCityPopulation: string;
  satAlmMunicipalityDelegation: string;
  satAlmEntidadFederativa: number;
  satProceedings: string;
  satAmount: number;
  satUnitMeasure: string;
  satDescription: string;
  satMark: string;
  satSubMark: string;
  satModel: string;
  satArmor: string;
  satEngine: string;
  satChassis: string;
  satCabin: string;
  satSerie: string;
  satInmDirection: string;
  satInmCologne: string;
  satInmCityPopulation: string;
  satInmMunicipalityDelegation: string;
  satInmEntidadFederativa: number;
  satInmSituationLegal: string;
  satConditionPhysical: string;
  satInmSurfaceGround: number;
  satInmSurfaceConstruc: number;
  satInmMeasureColind: string;
  satInmTitleProperty: string;
  satInmInscrrpp: string;
  satInmCertificadograv: string;
  satInmFeccertgrav: Date;
  satInmCertificadolibgrav: string;
  satInmFeccertlibgrav: Date;
  satPffDate: Date;
  sat_volumen_mercancia: number;
  satClassification: number;
  satSubClassification: number;
  satUsrTransfers: string;
  satTaxpayer: string;
  satAffair: string;
  satRefInfoScanned: string;
  satRefInfoPhotography: string;
  satAffairSae: string;
  saeFecrecepop: Date;
  saeusrrecibeoficio: string;
  saeType: number;
  saeSbtype: number;
  saeSsubtype: number;
  saeSssubtype: number;
  saeClasifNumber: number;
  saeDictamenKey: string;
  saeDictamenDate: Date;
  saeAclaracionkey: string;
  saeClarificationDate: Date;
  saeDetailClarification: string;
  saeImprocedenciaKey: string;
  saeInappropriatenessDate: Date;
  saeProgRetitleDate: Date;
  saeProgRetitle: string;
  saeSuspensionRetriteDate: Date;
  saeMinutesSuspensionKey: string;
  saeMinutesCancellationKey: string;
  saeCancellationRetriteDate: Date;
  saeMinutesReceptionKey: string;
  saeMinutesReceptionDate: Date;
  saeStatusReception: number;
  saePersonDeliverySat: string;
  saePersonReceivesSae: string;
  saeCoordAdmin: string;
  saeAmountreceived: number;
  saeUnitMeasure: string;
  saeStatePhysicalRecep: string;
  saeAppraisalDate: Date;
  saeWorthAppraisal: number;
  saeDestinyDate: Date;
  saeAmountSale: number;
  saeBeneficiary: string;
  saeGoodNumber: number;
  saeGoodBiasedNumber: string;
  saeInsertionRegDate: Date;
  saeShippingRegDate: Date;
  saeStatusShipping: string;
  id: number;
  saeUsrEdit: string;
  saeUsrGenerateNotif: string;
  saeEditNotifDate: Date;
  saeGenerateNotifDate: Date;
  saeTranEmiAutNumber: string;
  saeStatePhysical: string;
  saeClasifPropNumber: string;
  saeSteeringwheelNumber: number;
  saeProceedingsNumber: number;
  satTypeProceedings: string;
  saeStatus: string;
  satGuiamaster: string;
  satGuiahouse: string;
  satDepartureNumber: number;
  satOnlyDadKey: string;
  saeMinutesDonAsigKey: string;
  saeMinutesDonAsigDate: Date;
  saeDonees: string;
  saeMinutesDest: string;
  saeMinutesDestDate: Date;
  saeMinutesDevKey: string;
  saeMinutesDevDate: Date;
  saeEventKey: string;
  saeEventDate: Date;
  saeMinutesAdminRescKey: string;
  saeMinutesAdminRescDate: Date;
  satDirectionDelivery: string;
  saeCfdiDate: Date;
  saeAmountNoappIva: number;
  saeBeginningProgDate: Date;
  saeFinishProgDate: Date;
  satEdoConserv: string;
  saeDestiny: number;
  satBreaches: number;
  saeAtrbMissing: number;
}
export interface ICountAffairOptions {
  office: string;
  expedient?: string;
  expedientType?: string;
}
export interface ICatExpSat {
  progressive: number;
  expSat: string;
  indicatorSat: number;
}
