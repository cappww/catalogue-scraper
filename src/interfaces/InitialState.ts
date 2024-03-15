// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface InitialState {
  loadableConfigReducer: LoadableConfigReducer;
  staticPageReducer: ArakGroundhog;
  categoryListingReducer: CategoryListingReducer;
  footerReducer: ArakGroundhog;
  categoryNavigationReducer: ArakGroundhog;
  searchSuggestionReducer: SearchSuggestionReducer;
  locationsReducer: LocationsReducer;
  drugPageReducer: DrugPageReducer;
  otcReducer: ArakGroundhog;
  pdpDynamicReducer: ArakGroundhog;
  addToCartReducer: AddToCartReducer;
  shellReducer: ShellReducer;
  ugcReducer: UgcReducer;
  reportErrorReducer: ReportErrorReducer;
  subscribeEmailReducer: SubscribeEmailReducer;
  reviewPageReducer: ReviewPageReducer;
  listPageReducer: ArakGroundhog;
  allMedicinePageReducer: ArakGroundhog;
  allDiseasesPageReducer: ArakGroundhog;
  therapeuticMedicineReducer: ArakGroundhog;
  therapeuticClassReducer: ArakGroundhog;
  genericSaltPageReducer: ArakGroundhog;
  drugSubstitutePageReducer: ArakGroundhog;
  zylaPageReducer: ArakGroundhog;
  onlineDoctorConsultationPageReducer: OnlineDoctorConsultationPageReducer;
  addPatientPageReducer: AddPatientPageReducer;
  selectPatientPageReducer: SelectPatientPageReducer;
  searchResultReducer: SearchResultReducer;
  healthRecordReducer: HealthRecordReducer;
  patientRecordReducer: PatientRecordReducer;
  testReportReducer: TestReportReducer;
  prescriptionDetailsReducer: PrescriptionDetailsReducer;
  recommandedQtyReducer: RecommandedQtyReducer;
  EditPatientPageReducer: EditPatientPageReducer;
  SelectSymptomReducer: SelectSymptomReducer;
  listOfSpecialityReducer: ListOfSpecialityReducer;
  selectSpecialityReducer: SelectSpecialityReducer;
  OrderSummaryReducer: OrderSummaryReducer;
  listOfDoctorsReducer: Reducer;
  CouponPageReducer: CouponPageReducer;
  MyConsultationPageReducer: MyConsultationPageReducer;
  consultMethodReducer: ArakGroundhog;
  doctorSelectionReducer: Reducer;
  SlotSelectionReducer: SlotSelectionReducer;
  WaitingRoomReducer: WaitingRoomReducer;
  ConsultationSummaryReducer: ConsultationSummaryReducer;
  ConsultationDetailsReducer: ConsultationDetailsReducer;
  RateConsultReducer: RateConsultReducer;
  doctorProfileReducer: DoctorProfileReducer;
  healthRecordArchiveReducer: HealthRecordArchiveReducer;
  covidMonitorReducer: CovidMonitorReducer;
  KnowMoreSubstitutesReducer: ArakGroundhog;
  SearchSubstitutesReducer: ArakGroundhog;
  healthProfileSummaryReducer: HealthProfileSummaryReducer;
  tcpPointsReducer: TCPPointsReducer;
  userProfileReducer: UserProfileReducer;
  diseaseOldPageReducer: ArakGroundhog;
  diseaseCommonPageReducer: DiseaseCommonPageReducer;
  diseasePageReducer: DiseasePageReducer;
  addMedicineReducer: AddMedicineReducer;
  ratingFeedbackReducer: RatingFeedbackReducer;
  homeReducer: ArakGroundhog;
  otcHomeReducer: ArakGroundhog;
  drugHomeReducer: ArakGroundhog;
  MedicationSummaryReducer: MedicationSummaryReducer;
  authReducer: AuthReducer;
  ListOfTestSelectionPageReducer: ListOfTestSelectionPageReducer;
  ABExperimentReducer: ABExperimentReducer;
  labsSearch: LabsSearch;
  labsInventory: LabsInventory;
  labs: Labs;
  MyAccountReducer: MyAccountReducer;
  categoryReducer: CategoryReducer;
  categoriesReducer: ArakGroundhog;
  categoryTreeReducer: ArakGroundhog;
  labsHomeReducer: ArakGroundhog;
  pdpDataReducer: PDPDataReducer;
}

export interface ABExperimentReducer {
  redirectToCart: boolean;
}

export interface ConsultationDetailsReducer {
  ConsultationDetailsData: null;
  showThankYou: boolean;
  error: null;
  editDataSuccess: boolean;
  showLoader: boolean;
  invoiceMessage: null;
}

export interface ConsultationSummaryReducer {
  ConsultationSummaryData: null;
  showThankYou: boolean;
  error: null;
  showBottomSheet: boolean;
  phoneNumber: string;
  editDataSuccess: boolean;
  showLoader: boolean;
  conversationType: string;
  conversationClosed: boolean;
  showSnackBar: boolean;
  prescription: string;
}

export interface CouponPageReducer {
  fetchDataSuccess: boolean;
  error: null;
  couponPageData: HammerfestPonies;
  couponErrorMessage: string;
  couponApplied: boolean;
  popupData: HammerfestPonies;
}

export interface HammerfestPonies {}

export interface EditPatientPageReducer {
  dataUpdateSuccess: boolean;
  error: null;
  fetchDataSuccess: boolean;
  editPatientData: HammerfestPonies;
  validations: HammerfestPonies;
  postValidations: HammerfestPonies;
  showLoader: boolean;
}

export interface ArakGroundhog {
  isFetching?: boolean;
  isFetched: boolean;
  error: boolean | null;
  data?: PurpleData;
  addToCartSubstitute?: boolean;
  meta?: HammerfestPonies;
  consultMethodData?: null;
  drugSubstitutes?: any[];
}

export interface PurpleData {
  widgets?: any[];
  orderTrackingDetailed?: OrderTrackingDetailed;
  ad_tags?: Tag[];
  available?: boolean;
  banners_info?: BannersInfo;
  offers_info?: HammerfestPonies;
  combined_variants?: null;
  discount?: null;
  in_stock?: InStock[];
  out_of_stock?: null;
  pack_size?: string;
  page_type?: PageType;
  price?: number;
  quantities?: Quantities;
  related_skus?: RelatedSkus;
  sku_id?: number;
  unavailable?: null;
  vendors?: Vendors;
  upsell?: Upsell;
  eta_data?: Eta;
  care_plan_info?: null;
  care_plan_info_v2?: CarePlanInfoV2;
  app_download_info?: null;
  sku_name?: string;
  best_price?: BestPrice;
  cluster_id?: number;
  cheaper_substitutes?: null;
  doctor_chat_widget?: null;
  dfp_ad?: DfpAd;
  erx_widget?: ErxWidget;
  eta_info?: Eta;
  experiments?: Experiments;
  is_care_plan_member?: boolean;
  related_doctors?: RelatedDoctors;
  related_lab_tests?: RelatedLabTests;
  expiry?: string;
  substitutes?: Substitutes;
  per_unit_price?: number;
  schema?: PurpleSchema;
  variants?: null;
  translation_tags?: PurpleTranslationTags;
  tax_inclusion_text?: string;
  addons?: Addons;
  min_quantity_info?: null;
  active_care_plan_member?: boolean;
  recently_viewed?: RecentlyViewed;
  substitutes_data?: null;
  substitutes_footer?: null;
  substitutes_ga_values?: SubstitutesGaValues;
  discountWithSymbol?: HammerfestPonies;
  priceWithSymbol?: string;
  drugRelatedSkus?: DrugRecentlyViewed;
  otcSimilarSkus?: DrugRecentlyViewed;
  substituteProducts?: null;
  variantProducts?: null;
  drugRecentlyViewed?: DrugRecentlyViewed;
  isCarePlanMember?: boolean;
  tabs?: Tab[];
  EARNED?: Earned;
  REDEEMED?: Earned;
  pageHeader?: HammerfestPonies;
  redeemCards?: any[];
  visualInstructions?: VisualInstructions;
  cashHistory?: HammerfestPonies;
}

export interface Earned {
  quicklinks: any[];
  hasMoreQuicklinks: boolean;
}

export interface Tag {
  key: string;
  value: boolean | number | string;
}

export interface Addons {
  is_enabled: boolean;
  token: Token;
}

export interface Token {
  sku_details: string;
}

export interface BannersInfo {
  rapid_delivery: null;
  analytics_info: HammerfestPonies;
  signup: null;
  signup_and_earn_cashback: null;
  signup_to_view_content: null;
  medicine_authenticity: null;
  symptoms: null;
}

export interface BestPrice {
  header: string;
  price: string;
  coupon_code: string;
  discount_percent: string;
  display_text: string;
}

export interface CarePlanInfoV2 {
  selected_type: string;
  is_enabled: boolean;
  data: CarePlanInfoV2Datum[];
  disclaimer: string;
  care_plan_sku_id: number;
  is_widget_sticky: boolean;
  ga_event_label: string;
}

export interface CarePlanInfoV2Datum {
  view_type: string;
  is_enabled: boolean;
  discount: DatumDiscount;
  mrp: Mrp | null;
}

export interface DatumDiscount {
  price: number;
  is_striked: boolean;
  discount_percent: number | null;
  display_text: string;
  care_plan_logo?: CarePlanLogo;
  tooltip_data?: TooltipData;
}

export interface CarePlanLogo {
  icon: string;
  post_text: string;
}

export interface TooltipData {
  text: string;
  cta: Cta;
}

export interface Cta {
  text: string;
  redirect_url: string;
}

export interface Mrp {
  price: number;
  is_striked: boolean;
}

export interface DfpAd {
  experiment: string;
  top_banners: any[];
  bottom_banners: BottomBanner[];
  resolution: Resolution;
}

export interface BottomBanner {
  id: number;
  image: null;
  hover_text: null;
  alt_text: null;
  on_click_link: null;
  type: string;
  platform: string;
  position: number;
  dfp_id: string;
  offer_text: null;
  network_id: string;
  cluster_ids: number[];
  resolution: number[];
  page: string;
  page_position: string;
  platform_type: string;
  fallback_image: string;
  tags: Tag[];
}

export interface Resolution {
  width: number;
  height: number;
}

export interface DrugRecentlyViewed {
  header: string;
  type: string;
  values: DrugRecentlyViewedValue[];
  position?: string;
}

export interface DrugRecentlyViewedValue {
  text?: string;
  value?: string;
  color?: ColorEnum;
  key?: string;
  order?: number;
  discountPercent?: string;
  discountedPrice?: string;
  header?: string;
  imageUrl?: string;
  price?: string;
  rating?: HammerfestPonies;
  saleTime?: HammerfestPonies;
  skuId?: number;
  subText?: string;
  type?: Type;
  tags?: HammerfestPonies;
  url?: string;
  addToCartPageSource?: PageType;
  formularyGaLabel?: FormularyGaLabel;
  gaLabel?: GaLabel;
}

export enum PageType {
  Drug = "drug",
}

export enum ColorEnum {
  The913D36 = "#913D36",
}

export enum FormularyGaLabel {
  FormularyFalse = "formulary_false",
}

export interface GaLabel {
  entity_discounted_price: string;
  entity_id: number;
  entity_name: string;
  entity_price: string;
  vertical_position: number;
  sku_sponsored: boolean;
}

export enum Type {
  Otc = "otc",
}

export interface ErxWidget {
  header: string;
  sub_header: string;
  display_text: string;
  icon_url: string;
  slug: string;
}

export interface Eta {
  display_text: string;
  algorithm_type: null;
  is_visible: boolean;
  ga_event_type: string;
  delivery_dates: null;
  is_widget_sticky: boolean;
  sub_header: null;
  header: string;
  sku_available: boolean;
  overdue_reason: string;
}

export interface Experiments {
  analytics_info: AnalyticsInfo;
}

export interface AnalyticsInfo {
  youtube_video: string;
  therapeutic_class: string;
}

export interface InStock {
  type: string;
  label: string;
}

export interface OrderTrackingDetailed {
  orderTrackingDetailedData: HammerfestPonies;
  orderTrackingDetailedFetching: boolean;
  orderTrackingDetailedFetched: boolean;
  orderTrackingDetailedError: null;
}

export interface Quantities {
  default_value: number;
  default_label: string;
  values: QuantitiesValue[];
}

export interface QuantitiesValue {
  label: string;
  value: number;
}

export interface RecentlyViewed {
  header: string;
  values: RecentlyViewedValue[];
}

export interface RecentlyViewedValue {
  question: string;
  answer: string;
  slug: string;
  doctor: Doctor;
}

export interface Doctor {
  image_url: string;
  name: string;
  speciality: string;
}

export interface RelatedDoctors {
  header: string;
  values: RelatedDoctorsValue[];
}

export interface RelatedDoctorsValue {
  id: string;
  name: string;
  education: string;
  profile_pic: string;
  url: string;
  rating: Rating;
}

export interface Rating {
  color: ColorClass;
  text: number;
}

export interface ColorClass {
  badge_background: string;
  badge_textcolor: string;
  rating_color: string;
}

export interface RelatedLabTests {
  header: string;
  values: RelatedLabTestsValue[];
  view_all: string;
}

export interface RelatedLabTestsValue {
  id: number;
  name: string;
  slug: string;
}

export interface RelatedSkus {
  header: string;
  values: RelatedSkusValue[];
}

export interface RelatedSkusValue {
  dicount: Dicount;
  discount: ValueDiscount;
  guid: string;
  id: number;
  image_url: string;
  cropped_image_url: string;
  name: string;
  pack_size_label: string;
  price: string;
  slug: string;
  type: Type;
}

export interface Dicount {
  percent: string;
  price: number;
}

export interface ValueDiscount {
  percent: string;
  price: string;
}

export interface PurpleSchema {
  drug: PurpleDrug;
}

export interface PurpleDrug {
  relevantSpecialty: RelevantSpecialty;
}

export interface RelevantSpecialty {
  "@type": string;
  name: string;
}

export interface Substitutes {
  id: string;
  header: string;
  sub_header: string;
  view_all: ViewAll;
  current_value: CurrentValue;
  values: SubstitutesValue[];
}

export interface CurrentValue {
  name: string;
  per_unit_price: string;
}

export interface SubstitutesValue {
  id: number;
  innovator_tag: null;
  manufacturer: ValueManufacturer;
  name: string;
  per_unit_price: string;
  savings: Savings;
  slug: string;
  sub_type: null;
}

export interface ValueManufacturer {
  id: number;
  name: string;
  address: string;
  slug: string;
  header: string;
  manufacturer_header: string;
}

export interface Savings {
  color: string;
  text: string;
}

export interface ViewAll {
  header: string;
  slug: string;
}

export interface SubstitutesGaValues {
  formulary_present: boolean;
  substitute_widget: boolean;
  pack_size_widget: boolean;
  similar_widget: boolean;
  variant_widget: boolean;
}

export interface Tab {
  id: string;
  title: string;
  width: number;
}

export interface PurpleTranslationTags {
  products: string[];
}

export interface Upsell {
  type: string;
  data: null;
}

export interface Vendors {
  header: string;
  display_text: null | string;
}

export interface VisualInstructions {
  instructions: any[];
}

export interface ListOfTestSelectionPageReducer {
  fetchDataSuccess: boolean;
  error: null;
  listOfTestSelectionPageData: HammerfestPonies;
}

export interface MedicationSummaryReducer {
  data: HammerfestPonies;
  summaryPatientId: null;
  isFetching: boolean;
  isFetched: boolean;
  moreFectching: boolean;
  moreFetched: boolean;
  error: null;
  metadata: Metadata;
}

export interface Metadata {
  hasMorePage: boolean;
  pageNumber: number;
  details: string;
  pageSize: number;
  nextPage: number;
}

export interface MyAccountReducer {
  widgets: HammerfestPonies;
  isFetching: boolean;
  isFetched: boolean;
  errorFetching: null;
  reorderDataFetching: boolean;
  reorderDataFetched: boolean;
  reorderDataError: null;
  careplanDataFetching: boolean;
  careplanDataFetched: boolean;
  careplanDataError: null;
}

export interface MyConsultationPageReducer {
  fetchDataSuccess: boolean;
  error: null;
  myConsultationPageData: HammerfestPonies;
  cancelConsultSuccess: boolean;
  cancelConsultFailure: boolean;
  hasMore: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isFetched: boolean;
}

export interface OrderSummaryReducer {
  orderSummaryData: null;
  showThankYou: boolean;
  error: null;
  showBottomSheet: boolean;
  phoneNumber: string;
  editDataSuccess: boolean;
  showLoader: boolean;
  errorMessage: null;
  doctorUnavailableData: null;
  conversationType: null;
  membershipStatus: boolean;
  membershipStatusFetching: boolean;
  membershipStatusError: boolean;
  membershipRemoveSuccess: boolean;
  membershipRemoveFetching: boolean;
  membershipRemoveError: boolean;
  memberShipAdding: boolean;
  memberShipAdded: boolean;
  showCarePlan: boolean;
  source: null;
}

export interface RateConsultReducer {
  RateConsultData: null;
  fetchDataSuccess: boolean;
  error: null;
  showLoader: boolean;
  popupData: null;
}

export interface SelectSymptomReducer {
  fetchDataSuccess: boolean;
  error: null;
  symptomsData: HammerfestPonies;
  symptomsSearchData: HammerfestPonies;
  fetchSearchDataSuccess: boolean;
  errorSearch: null;
  dataSentSucess: boolean;
  showLoader: boolean;
}

export interface SlotSelectionReducer {
  fetchDataSuccess: boolean;
  error: null;
  slotSelectionData: null;
  isLoading: boolean;
  showLoader: boolean;
  isReschedule: boolean;
  infoData: null;
  conversationType: null;
}

export interface WaitingRoomReducer {
  WaitingRoomData: null;
  showThankYou: boolean;
  error: null;
  showBottomSheet: boolean;
  phoneNumber: string;
  editDataSuccess: boolean;
  showLoader: boolean;
  infoData: null;
  isLoadingMoreVideos: boolean;
  hasMore: boolean;
  snackBarError: null;
}

export interface AddMedicineReducer {
  data: HammerfestPonies;
  patientId: null;
  isFetching: boolean;
  isFetched: boolean;
  error: null;
  addMedicineSuccess: boolean;
  updateMedicineSuccess: boolean;
  message: string;
  metadata: HammerfestPonies;
}

export interface AddPatientPageReducer {
  patientData: HammerfestPonies;
  error: null;
  showBottomSheet: boolean;
  dataSentSuccess: boolean;
  postValidations: HammerfestPonies;
  showLoader: boolean;
}

export interface AddToCartReducer {
  isAdding: boolean;
  isAdded: boolean;
  showVerifyDetails: boolean;
  number: null;
  error: null;
  isUpdating: boolean;
}

export interface AuthReducer {
  optionsList: null;
  header: string;
  description: string;
  cta: HammerfestPonies;
  conflictEmail: string;
  number: string;
  conflict: boolean;
  requiredDetail: null;
}

export interface CategoryListingReducer {
  data: HammerfestPonies;
  isFetching: boolean;
  isFetched: boolean;
  error: null;
  isLoading: boolean;
  hasMore: boolean;
  slugId: string;
  intermediateResults: null;
  intermediateFilterData: null;
}

export interface CategoryReducer {
  data: CategoryReducerData;
  isFetching: boolean;
  isFetched: boolean;
  error: null;
  sortUpdating: boolean;
  sortUpdated: boolean;
  filterApplying: boolean;
  filterApplied: boolean;
  filterApplyError: boolean;
  intermediateFilters: null;
  isFetchingIntermediateFilters: boolean;
  isFetchedIntermediateFilters: boolean;
  isFetchedIntermediateFiltersError: boolean;
  sortError: null;
  moreFetching: boolean;
  moreFetched: boolean;
}

export interface CategoryReducerData {
  widgets: any[];
}

export interface CovidMonitorReducer {
  chartData: HammerfestPonies;
  patientData: HammerfestPonies;
  staticData: HammerfestPonies;
  isChardDataFetching: boolean;
  isChartDataFetched: boolean;
  chartDataError: null;
  updateChartDataSuccess: boolean;
  updateChartDataError: null;
  addRowSuccess: boolean;
  addRowError: null;
  addFirstDateOfSymptomSuccess: boolean;
  addFirstDateOfSymptomError: null;
}

export interface DiseaseCommonPageReducer {
  isFetching: boolean;
  isFetched: boolean;
  isOldView: boolean;
  id: null;
  name: null;
  error: null;
}

export interface DiseasePageReducer {
  data: DiseasePageReducerData;
  isFetching: boolean;
  isFetched: boolean;
  error: null;
  reportProblemFormState: ReportProblemFormState;
}

export interface DiseasePageReducerData {
  metaData: MetaData;
  result: Result;
}

export interface MetaData {
  title: string;
  meta_desc: string;
  meta_keyword: string;
}

export interface Result {
  availableLanguages: any[];
  dynamicWidgets: any[];
  toc: any[];
}

export interface ReportProblemFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  errorMessage: null;
}

export interface DoctorProfileReducer {
  doctorProfileData: null;
  isFetched: boolean;
  error: null;
  hasMore: boolean;
}

export interface Reducer {
  fetchDataSuccess: boolean;
  error: null;
  doctorSelectionData?: null;
  isLoading: boolean;
  hasMore: boolean;
  isFetching: boolean;
  isFetched: boolean;
  conversationType?: null;
  listOfDoctorsData?: null;
}

export interface DrugPageReducer {
  data: DrugPageReducerData;
  isFetching: boolean;
  isFetched: boolean;
  error: null;
  notifyMeResponse: null;
  addToCartSubstitute: boolean;
}

export interface DrugPageReducerData {
  anonymous_chats: RecentlyViewed;
  authors: Authors;
  available_languages: Language[];
  breadcrumbs: any[];
  composition: Composition;
  canonical_url: string;
  disclaimer: Vendors;
  editorial_policy: EditorialPolicy;
  eligible_for_erx: boolean;
  fact_box: FactBox[];
  index: Index;
  is_fdc: boolean;
  medicine_interaction: null;
  meta_data: MetaDataClass;
  related_ayurveda: RelatedAyurveda;
  schema: ShellReducerSchema;
  sku: Sku;
  sku_fact_box: SkuFactBox;
  user_actions: UserActions;
  user_feedbacks: UserFeedbacks;
  warnings: Warnings;
  social_urls: SocialUrls;
  translation_tags: FluffyTranslationTags;
  banners: null;
  informational_purpose_text: null;
  selected_language: Language;
}

export interface Authors {
  header: string;
  last_updated: LastUpdated;
  values: AuthorsValue[];
}

export interface LastUpdated {
  header: string;
  value: string;
}

export interface AuthorsValue {
  header: string;
  image_url: string;
  name: string;
  qualifications: string;
  slug: string;
  type: string;
}

export interface Language {
  selected: boolean;
  display_text: string;
  id: string;
  slug: string;
}

export interface Composition {
  header: string;
  uses: Use[];
  side_effects: SideEffect[];
  strength: Strength[];
  expert_advice: ExpertAdvice[];
  faqs: FAQ[];
  introduction: Vendors[];
  mechanism_of_action: ExpertAdvice[];
  short_introduction: string[];
  how_to_take: ExpertAdvice[];
  saltIds: number[];
  cope_up_strategies: HammerfestPonies[];
  benefits: SortData[];
}

export interface SortData {
  header: string;
  values: Vendors[];
}

export interface ExpertAdvice {
  id: string;
  header: string;
  display_text: string;
}

export interface FAQ {
  id: string;
  header: string;
  values: FAQValue[];
}

export interface FAQValue {
  id: number;
  question: string;
  answer: string;
  like_count: number;
  slug: null;
}

export interface SideEffect {
  header: string;
  text: string;
  values: SideEffectValue[];
  id: string;
}

export interface SideEffectValue {
  label: string;
  header: string;
  display_text: string;
  values: string[];
  color_code: ColorCode;
}

export interface ColorCode {
  label: string;
  border: null | string;
  bg_color: string;
}

export interface Strength {
  display_text: string;
  unit: string;
  value: string;
}

export interface Use {
  id: string;
  header: string;
  sub_header: string;
  values: UseValue[];
  display_text: string;
}

export interface UseValue {
  name: string;
  prefix: string;
  url: string;
}

export interface EditorialPolicy {
  header: string;
  image_url: string;
  slug: string;
  sub_header: string;
}

export interface FactBox {
  header: string;
  values: FactBoxValue[];
  redirect_widget: RedirectWidget;
}

export interface RedirectWidget {
  display_text: string;
  redirect_to: string;
}

export interface FactBoxValue {
  header: string;
  icon?: null;
  info_text?: null;
  redirect_to?: null;
  sub_text?: null;
  text: string;
}

export interface Index {
  alternate_brands: string;
  references: string;
  safety_advice: string;
  side_effects_0: string;
  uses_0: string;
}

export interface MetaDataClass {
  title: string;
  meta_desc: string;
  meta_keyword: string;
  heading_tag: string;
  image_alt_tag: string;
  image_title_tag: string;
  meta_tags: MetaTag[];
}

export interface MetaTag {
  name: string;
  content: string;
}

export interface RelatedAyurveda {
  articles: any[];
}

export interface ShellReducerSchema {
  author: Author[];
  question: Question;
  drug: FluffyDrug;
}

export interface Author {
  "@type": string;
  givenName: string;
  jobTitle: string;
}

export interface FluffyDrug {
  "@context": string;
  "@type": string;
  url: string;
  mainEntityOfPage: string;
  prescriptionStatus: string;
  drugUnit: string;
  activeIngredient: string;
  alcoholWarning: string;
  breastfeedingWarning: string;
  foodWarning: null;
  pregnancyWarning: string;
  manufacturer: DrugManufacturer;
  interactingDrug: null;
  administrationRoute: string;
  isAvailableGenerically: boolean;
  isProprietary: boolean;
  nonProprietaryName: string;
  dosageForm: string;
  description: string;
  name: string;
  proprietaryName: string;
  availableStrength: AvailableStrength[];
  mechanismOfAction: string[];
  doseSchedule: DoseSchedule;
  image: string;
  relevantSpecialty?: RelevantSpecialty;
}

export interface AvailableStrength {
  "@type": string;
  activeIngredient: null;
  strengthUnit: string;
  strengthValue: string;
}

export interface DoseSchedule {
  "@type": string;
  doseUnit: string;
  doseValue: string;
  frequency: string;
}

export interface DrugManufacturer {
  "@type": string;
  legalName: string;
}

export interface Question {
  "@context": string;
  "@type": string;
  mainEntity: MainEntity[];
}

export interface MainEntity {
  "@context": string;
  "@type": MainEntityType;
  acceptedAnswer: AcceptedAnswer;
  name: string;
}

export enum MainEntityType {
  Question = "Question",
}

export interface AcceptedAnswer {
  "@type": AcceptedAnswerType;
  text: string;
}

export enum AcceptedAnswerType {
  Answer = "Answer",
}

export interface Sku {
  id: number;
  images: Image[];
  is_coupon_applicable: boolean;
  manufacturer: ValueManufacturer;
  missed_dose: Vendors;
  name: string;
  quantities: Quantity[];
  quantity_in_pack: string;
  references: References;
  rx_required: RxRequired;
  slug: string;
  sub_type: null;
  therapeutic_class: string;
  type: string;
  youtube_slug: YoutubeSlug;
  pack_size: string;
  pack_size_label: string;
  description: Vendors;
  label: string;
  overview: Overview;
}

export interface Image {
  thumbnail: string;
  low: string;
  medium: string;
  high: string;
  mediumhigh: string;
}

export interface Overview {
  social_cue: SocialCue;
}

export interface SocialCue {
  icon: string;
  display_text: string;
}

export interface Quantity {
  value: string;
  display_text: string;
  quantity: number;
}

export interface References {
  header: string;
  follow: boolean;
  icon_url: string;
  values: ReferencesValue[];
}

export interface ReferencesValue {
  url: string;
  data: string;
}

export interface RxRequired {
  header: string;
  icon_url: string;
}

export interface YoutubeSlug {
  id: string;
}

export interface SkuFactBox {
  header: string;
  values: SkuFactBoxValue[];
}

export interface SkuFactBoxValue {
  header: string;
  text: string;
}

export interface SocialUrls {
  heading: string;
  data: SocialUrlsDatum[];
}

export interface SocialUrlsDatum {
  image_url: string;
  icon_type: string;
  alternate_text: string;
  url: string;
}

export interface FluffyTranslationTags {
  products: string[];
  ingredients: string[];
  symptoms: string[];
}

export interface UserActions {
  show_more: string;
  show_less: string;
  listen: string;
  share: string;
}

export interface UserFeedbacks {
  header: string;
  survey_count: number;
  values: DrugRecentlyViewed[];
}

export interface Warnings {
  id: string;
  header: string;
  description: null;
  values: WarningsValue[];
}

export interface WarningsValue {
  key: string;
  tag: string;
  label: string;
  color_code: ColorCode;
  description: string;
  display_text: string;
  icon_url: string;
  question: string;
}

export interface HealthProfileSummaryReducer {
  data: HammerfestPonies;
  summaryPanelId: null;
  summaryPatientId: null;
  isFetching: boolean;
  isFetched: boolean;
  error: null;
}

export interface HealthRecordArchiveReducer {
  data: HammerfestPonies;
  isFetching: boolean;
  isFetched: boolean;
  error: null;
  unarchiveMemberSuccess: boolean;
  unarchiveMemberMessage: null;
  unarchiveMemberError: null;
  deletePatientRequestSuccess: boolean;
  deletePatientError: null;
  deletePatientSuccessMessage: null;
}

export interface HealthRecordReducer {
  otherPatients: any[];
  selfPatient: any[];
  totalCount: number;
  archivedCount: number;
  isFetching: boolean;
  isFetched: boolean;
  errorFetching: boolean;
  showBanner: boolean;
  mergePatientList: any[];
  bannerDataFetching: boolean;
  bannerDataFetched: boolean;
  bannerData: HammerfestPonies;
  addPatientRequestSuccess: boolean;
  archiveMemberSuccess: boolean;
  mergePatientRequestSuccess: boolean;
  editPatientRequestSuccess: boolean;
  starUnstarPatientRequestSuccess: boolean;
  deletePatientRequestSuccess: boolean;
  message: string;
}

export interface Labs {
  haveSKUs: null;
  cartSKUs: null;
  selectedSKUs: HammerfestPonies;
  selectingSKU: null;
  selectingLab: null;
  selectedLab: null;
  isReplaceError: boolean;
  confirmDialogConfig: ConfirmDialogConfig;
}

export interface ConfirmDialogConfig {
  sku: HammerfestPonies;
  showConfirmDialog: boolean;
  confirmDialogType: string;
  heading: string;
  subHeading: string;
  primaryCTALabel: string;
  secondaryCTALabel: string;
  icon: string;
}

export interface LabsInventory {
  data: LabsInventoryData;
  isFetchError: boolean;
  error: null;
  intermediateResults: null;
  intermediateFilterData: null;
}

export interface LabsInventoryData {
  widgets: any[];
  sort: Sort;
  filters: Filters;
}

export interface Filters {
  name: string;
  types: any[];
}

export interface Sort {
  name: string;
  key: string;
  options: any[];
}

export interface LabsSearch {
  searchSuggestions: any[];
  searchResults: any[];
  recentSearches: HammerfestPonies;
  isError: boolean;
}

export interface ListOfSpecialityReducer {
  listSpecialityData: null;
  showThankYou: boolean;
  error: null;
  showBottomSheet: boolean;
}

export interface LoadableConfigReducer {
  SERVER_SIDE_RENDER: boolean;
  CLIENT_ONLY_RENDER: boolean;
}

export interface LocationsReducer {
  cities: Cities;
  topCities: Cities;
  currentCity: string;
  isFetching: boolean;
  isFetched: boolean;
  error: null;
  cityData: CityData;
  showLocations: boolean;
}

export interface Cities {
  data: any[];
}

export interface CityData {
  serviceable: boolean;
  otc_available: boolean;
  pharma_available: boolean;
  city: string;
}

export interface OnlineDoctorConsultationPageReducer {
  homeData: null;
  dataFetchSuccess: boolean;
  error: null;
  cancelConsultSuccess: boolean;
  cancelConsultFailure: boolean;
  showPopup: boolean;
  cancelDeleteData: HammerfestPonies;
  isPaymentPending: boolean;
  consultDiscarded: boolean;
  showLoader: boolean;
  memberShipAdding: boolean;
  memberShipAdded: boolean;
  showCarePlan: boolean;
  isFetching: boolean;
}

export interface PatientRecordReducer {
  patientId: null;
  header: string;
  gender: string;
  relation: string;
  avatarUrl: string;
  subText: string;
  dateOfBirth: string;
  star: boolean;
  tabValue: string;
  isArchive: null;
  prescriptions: any[];
  prescriptionCount: number;
  diagnosticsCount: number;
  tests: any[];
  trends: HammerfestPonies;
  medicationSummary: HammerfestPonies;
  isFetching: boolean;
  isFetched: boolean;
  errorFetching: boolean;
  moreFetching: boolean;
  moreFetched: boolean;
  error: null;
  prescriptionMetadata: DiagnosticsMetadataClass;
  diagnosticsMetadata: DiagnosticsMetadataClass;
  pageSize: number;
  editPatientRequestSuccess: boolean;
  editPatientError: null;
  editPatientSuccessMessage: null;
  imageUploadSuccess: boolean;
  imageUploadSuccessMessage: null;
  imageUploadErrorMessage: null;
  archiveUnarchiveMemberSuccess: boolean;
  archiveUnarchiveMemberMessage: null;
  archiveUnarchiveMemberError: null;
  starUnstarPatientRequestSuccess: boolean;
  starUnstarPatientError: null;
  starUnstarPatientSuccessMessage: null;
  deletePatientRequestSuccess: boolean;
  deletePatientError: null;
  deletePatientSuccessMessage: null;
}

export interface DiagnosticsMetadataClass {
  hasMorePage: boolean;
  pageNumber: number;
  details: string;
}

export interface PDPDataReducer {
  pdpData: HammerfestPonies;
  metaData: null;
  isFetched: boolean;
  testPackageId: null;
  error: null;
  feedback: boolean;
  feedbackData: HammerfestPonies;
}

export interface PrescriptionDetailsReducer {
  data: HammerfestPonies;
  prescriptionId: null;
  isFetching: boolean;
  isFetched: boolean;
  errorFetching: boolean;
  isArchive: null;
  star: boolean;
  editPatientRequestSuccess: boolean;
  editPatientError: null;
  editPatientSuccessMessage: null;
  imageUploadSuccess: boolean;
  imageUploadSuccessMessage: null;
  imageUploadErrorMessage: null;
  archiveUnarchiveMemberSuccess: boolean;
  archiveUnarchiveMemberMessage: null;
  archiveUnarchiveMemberError: null;
  starUnstarPatientRequestSuccess: boolean;
  starUnstarPatientError: null;
  starUnstarPatientSuccessMessage: null;
  deletePatientRequestSuccess: boolean;
  deletePatientError: null;
  deletePatientSuccessMessage: null;
  tags: Tags;
  tagsFetched: boolean;
  tagsError: null;
}

export interface Tags {
  tagsCategory: null;
  selectedUserTags: any[];
  userTags: any[];
  prescriptionTags: any[];
}

export interface RatingFeedbackReducer {
  data: any[];
  isFetching: boolean;
  isFetched: boolean;
  feedbackData: HammerfestPonies;
  feedbackSuccess: boolean;
  feedbackFailure: boolean;
  ratingData: HammerfestPonies;
  ratingSuccess: boolean;
  ratingFailure: boolean;
  error: null;
}

export interface RecommandedQtyReducer {
  error: null;
  quantityRecommendationData: HammerfestPonies;
  addToCartType: string;
  cartId: string;
  isUpdatingCart: string;
  selectedQuantity: number;
}

export interface ReportErrorReducer {
  isSubmitting: boolean;
  reportErrorFailure: boolean;
  reportErrorSuccess: boolean;
  error: null;
}

export interface ReviewPageReducer {
  data: ReviewPageReducerData;
  isFetching: boolean;
  isFetched: boolean;
  isLoading: boolean;
  error: null;
  reportError: null;
}

export interface ReviewPageReducerData {
  reviews: any[];
  sku_info: HammerfestPonies;
  sort_options: HammerfestPonies;
  hasMore: boolean;
  pageNumber: number;
  total_reviews: number;
}

export interface SearchResultReducer {
  banners: Cities;
  filterData: FilterData;
  meta_data: HammerfestPonies;
  page_number: number;
  previous: number;
  previous_scroll_id: string;
  query: string;
  results: any[];
  scroll_id: string;
  sortData: SortData;
  total_record_count: number;
  intermediateResults: null;
  intermediateFilterData: null;
  isFetching: boolean;
  isFetched: boolean;
  moreFetching: boolean;
  moreFetched: boolean;
  intermediateFiltersFetching: boolean;
  intermediateFiltersFetched: boolean;
  error: null;
  resultFound: boolean;
  errorHeader: null;
  errorDescription: null;
  suggestionData: SortData;
  widgetsData: HammerfestPonies;
  isWidgetsFetching: boolean;
  isWidgetsFetched: boolean;
}

export interface FilterData {
  header: string;
  count: null;
  values: any[];
}

export interface SearchSuggestionReducer {
  isFetchingWidgets: boolean;
  isFetchedWidgets: boolean;
  errorWidgets: null;
  resultsWidgets: ResultsWidgets;
  isFetchingQuery: boolean;
  isFetchedQuery: boolean;
  errorQuery: null;
  searchTerm: string;
  resultsQuery: any[];
  resultsRecents: any[];
  noResultsFound: boolean;
  didYouMeanData: DidYouMeanData;
}

export interface DidYouMeanData {
  isFromDidYouMean: boolean;
  source: null;
}

export interface ResultsWidgets {
  widget: null;
  banners: null;
}

export interface SelectPatientPageReducer {
  patientData: HammerfestPonies;
  dataFetchSuccess: boolean;
  error: null;
  showBottomSheet: boolean;
  patientDataSent: boolean;
  hasMore: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isFetched: boolean;
  patientError: null;
  showLoader: boolean;
}

export interface SelectSpecialityReducer {
  selectSpecialityData: HammerfestPonies;
  dataFetched: boolean;
  error: null;
  dataSentSuccess: boolean;
  dataUpdated: boolean;
  showLoader: boolean;
}

export interface ShellReducer {
  showVerifyDetails: boolean;
  footerVisible: boolean;
  available_languages: Language[];
  cartCount: number;
  cartAmount: number;
  itemsInCart: HammerfestPonies;
  fetchingCart: boolean;
  userData: HammerfestPonies;
  pageTitle: string;
  meta_data: MetaDataClass;
  schema: ShellReducerSchema;
  hideHeader: boolean;
  hideFooter: boolean;
  showUdp: boolean;
  showSearch: boolean;
  showCart: boolean;
  showLocationPicker: boolean;
  navigationDrawerData: NavigationDrawerData;
  isWebview: boolean;
  isLabs: boolean;
  loggedIn: boolean;
  showPageTransition: boolean;
  corporateDetails: HammerfestPonies;
  bottomNavigationData: any[];
  message: string;
  pageName: null;
  hideHeaderSeparator: boolean;
  carePlanHeader: HammerfestPonies;
  isBot: boolean;
  udpData: UDPData;
}

export interface NavigationDrawerData {
  links: Array<Link[]>;
  ads: Ads;
}

export interface Ads {
  app_download: AppDownload;
}

export interface AppDownload {
  header: string;
  features: string[];
  google_store: LEStore;
  apple_store: LEStore;
  header_image: string;
}

export interface LEStore {
  link: string;
  image_url: string;
}

export interface Link {
  url: string;
  is_new: boolean;
  is_renew?: boolean;
  is_external: boolean;
  display_text: string;
  image_url: string;
}

export interface UDPData {
  drug_udps: DrugUDP[];
}

export interface DrugUDP {
  id: null;
  name: string;
  slug: string;
  level: number;
  children: any[];
}

export interface SubscribeEmailReducer {
  isSubmitting: boolean;
  success: boolean;
  error: boolean;
  responseData: null;
}

export interface TCPPointsReducer {
  tcpPoints: ArakGroundhog;
  tcpHistory: ArakGroundhog;
  isFetched: boolean;
  isFetching: boolean;
}

export interface TestReportReducer {
  data: HammerfestPonies;
  diagnosticsId: null;
  isFetching: boolean;
  isFetched: boolean;
  errorFetching: boolean;
  isArchive: null;
  star: null;
  editPatientRequestSuccess: boolean;
  editPatientError: null;
  editPatientSuccessMessage: null;
  imageUploadSuccess: boolean;
  imageUploadSuccessMessage: null;
  imageUploadErrorMessage: null;
  uploadedId: null;
  archiveMemberSuccess: boolean;
  archiveMemberMessage: null;
  archiveMemberError: null;
  starUnstarPatientRequestSuccess: boolean;
  starUnstarPatientError: null;
  starUnstarPatientSuccessMessage: null;
  deletePatientRequestSuccess: boolean;
  deletePatientError: null;
  deletePatientSuccessMessage: null;
}

export interface UgcReducer {
  feedbackQuestionData: HammerfestPonies;
  feedbackError: any[];
  selectedRadioApiOptionId: string;
  searchAnswerData: any[];
  showNoResults: boolean;
  feedbackFreeText: string;
  feedbackResponseArray: any[];
  autocompleteArray: any[];
  showThankYou: boolean;
  thankYouMessage: string;
  feedbackRatingValue: number;
  isfeedbackPresent: boolean;
}

export interface UserProfileReducer {
  data: UserProfileReducerData;
  error: null;
  isFetched: boolean;
  isFetching: boolean;
  showSnackBar: boolean;
  detailEdit: DetailEdit;
}

export interface UserProfileReducerData {
  user_data: UserData;
}

export interface UserData {
  is_careplan_member: boolean;
  sections: Sections;
  wallet_details: HammerfestPonies;
}

export interface Sections {
  details: any[];
  properties: any[];
}

export interface DetailEdit {
  isAlreadyExistError: boolean;
  error: null;
  isFetched: boolean;
  currentStep: null;
}
