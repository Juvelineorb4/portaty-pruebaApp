/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  blog?: Blog | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  blogPostsId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  blogPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  blogPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateAImageCarouselInput = {
  id?: string | null,
  image: string,
  description?: string | null,
  route?: string | null,
};

export type ModelAImageCarouselConditionInput = {
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  route?: ModelStringInput | null,
  and?: Array< ModelAImageCarouselConditionInput | null > | null,
  or?: Array< ModelAImageCarouselConditionInput | null > | null,
  not?: ModelAImageCarouselConditionInput | null,
};

export type AImageCarousel = {
  __typename: "AImageCarousel",
  id: string,
  image: string,
  description?: string | null,
  route?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAImageCarouselInput = {
  id: string,
  image?: string | null,
  description?: string | null,
  route?: string | null,
};

export type DeleteAImageCarouselInput = {
  id: string,
};

export type CreateABrandInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
};

export type ModelABrandConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelABrandConditionInput | null > | null,
  or?: Array< ModelABrandConditionInput | null > | null,
  not?: ModelABrandConditionInput | null,
};

export type ABrand = {
  __typename: "ABrand",
  id: string,
  name?: string | null,
  image?: string | null,
  phones?: ModelAPhoneConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAPhoneConnection = {
  __typename: "ModelAPhoneConnection",
  items:  Array<APhone | null >,
  nextToken?: string | null,
};

export type APhone = {
  __typename: "APhone",
  id: string,
  name?: string | null,
  images?: Array< string | null > | null,
  maxPrice?: number | null,
  minPrice?: number | null,
  lastPrice?: number | null,
  suggestedPrice?: number | null,
  reviews?: Array< string | null > | null,
  ratings?: Array< number | null > | null,
  avgRating?: number | null,
  brandID: string,
  brand?: ABrand | null,
  productTypeID: string,
  productType?: AProductType | null,
  createdAt: string,
  updatedAt: string,
};

export type AProductType = {
  __typename: "AProductType",
  id: string,
  name?: string | null,
  image?: string | null,
  phones?: ModelAPhoneConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateABrandInput = {
  id: string,
  name?: string | null,
  image?: string | null,
};

export type DeleteABrandInput = {
  id: string,
};

export type CreateAProductTypeInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
};

export type ModelAProductTypeConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelAProductTypeConditionInput | null > | null,
  or?: Array< ModelAProductTypeConditionInput | null > | null,
  not?: ModelAProductTypeConditionInput | null,
};

export type UpdateAProductTypeInput = {
  id: string,
  name?: string | null,
  image?: string | null,
};

export type DeleteAProductTypeInput = {
  id: string,
};

export type CreateAPhoneInput = {
  id?: string | null,
  name?: string | null,
  images?: Array< string | null > | null,
  maxPrice?: number | null,
  minPrice?: number | null,
  lastPrice?: number | null,
  suggestedPrice?: number | null,
  reviews?: Array< string | null > | null,
  ratings?: Array< number | null > | null,
  avgRating?: number | null,
  brandID: string,
  productTypeID: string,
};

export type ModelAPhoneConditionInput = {
  name?: ModelStringInput | null,
  images?: ModelStringInput | null,
  maxPrice?: ModelFloatInput | null,
  minPrice?: ModelFloatInput | null,
  lastPrice?: ModelFloatInput | null,
  suggestedPrice?: ModelFloatInput | null,
  reviews?: ModelStringInput | null,
  ratings?: ModelIntInput | null,
  avgRating?: ModelFloatInput | null,
  brandID?: ModelIDInput | null,
  productTypeID?: ModelIDInput | null,
  and?: Array< ModelAPhoneConditionInput | null > | null,
  or?: Array< ModelAPhoneConditionInput | null > | null,
  not?: ModelAPhoneConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAPhoneInput = {
  id: string,
  name?: string | null,
  images?: Array< string | null > | null,
  maxPrice?: number | null,
  minPrice?: number | null,
  lastPrice?: number | null,
  suggestedPrice?: number | null,
  reviews?: Array< string | null > | null,
  ratings?: Array< number | null > | null,
  avgRating?: number | null,
  brandID?: string | null,
  productTypeID?: string | null,
};

export type DeleteAPhoneInput = {
  id: string,
};

export type CreateACarrierInput = {
  id?: string | null,
  name: string,
  image: string,
  countryID: string,
};

export type ModelACarrierConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  countryID?: ModelIDInput | null,
  and?: Array< ModelACarrierConditionInput | null > | null,
  or?: Array< ModelACarrierConditionInput | null > | null,
  not?: ModelACarrierConditionInput | null,
};

export type ACarrier = {
  __typename: "ACarrier",
  id: string,
  name: string,
  image: string,
  countryID: string,
  country?: ACountry | null,
  createdAt: string,
  updatedAt: string,
};

export type ACountry = {
  __typename: "ACountry",
  id: string,
  name: string,
  officialName?: string | null,
  nativeName?: string | null,
  idd?: Idd | null,
  googleMaps?: string | null,
  timeZone?: Array< string > | null,
  flag?: string | null,
  postalCode?: PostalCode | null,
  carriers?: ModelACarrierConnection | null,
  languages?: ModelACountriesLanguagesConnection | null,
  currencies?: ModelACountriesCurrenciesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Idd = {
  __typename: "Idd",
  root?: string | null,
  suffixes?: Array< string | null > | null,
};

export type PostalCode = {
  __typename: "PostalCode",
  format?: string | null,
  regex?: string | null,
};

export type ModelACarrierConnection = {
  __typename: "ModelACarrierConnection",
  items:  Array<ACarrier | null >,
  nextToken?: string | null,
};

export type ModelACountriesLanguagesConnection = {
  __typename: "ModelACountriesLanguagesConnection",
  items:  Array<ACountriesLanguages | null >,
  nextToken?: string | null,
};

export type ACountriesLanguages = {
  __typename: "ACountriesLanguages",
  id: string,
  aCountryId: string,
  aLanguageId: string,
  aCountry: ACountry,
  aLanguage: ALanguage,
  createdAt: string,
  updatedAt: string,
};

export type ALanguage = {
  __typename: "ALanguage",
  id: string,
  name: string,
  abbreviation: string,
  countries?: ModelACountriesLanguagesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelACountriesCurrenciesConnection = {
  __typename: "ModelACountriesCurrenciesConnection",
  items:  Array<ACountriesCurrencies | null >,
  nextToken?: string | null,
};

export type ACountriesCurrencies = {
  __typename: "ACountriesCurrencies",
  id: string,
  aCountryId: string,
  aCurrencieId: string,
  aCountry: ACountry,
  aCurrencie: ACurrencie,
  createdAt: string,
  updatedAt: string,
};

export type ACurrencie = {
  __typename: "ACurrencie",
  id: string,
  code: string,
  name: string,
  symbol: string,
  countries?: ModelACountriesCurrenciesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateACarrierInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  countryID?: string | null,
};

export type DeleteACarrierInput = {
  id: string,
};

export type CreateACountryInput = {
  id?: string | null,
  name: string,
  officialName?: string | null,
  nativeName?: string | null,
  idd?: IddInput | null,
  googleMaps?: string | null,
  timeZone?: Array< string > | null,
  flag?: string | null,
  postalCode?: PostalCodeInput | null,
};

export type IddInput = {
  root?: string | null,
  suffixes?: Array< string | null > | null,
};

export type PostalCodeInput = {
  format?: string | null,
  regex?: string | null,
};

export type ModelACountryConditionInput = {
  name?: ModelStringInput | null,
  officialName?: ModelStringInput | null,
  nativeName?: ModelStringInput | null,
  googleMaps?: ModelStringInput | null,
  timeZone?: ModelStringInput | null,
  flag?: ModelStringInput | null,
  and?: Array< ModelACountryConditionInput | null > | null,
  or?: Array< ModelACountryConditionInput | null > | null,
  not?: ModelACountryConditionInput | null,
};

export type UpdateACountryInput = {
  id: string,
  name?: string | null,
  officialName?: string | null,
  nativeName?: string | null,
  idd?: IddInput | null,
  googleMaps?: string | null,
  timeZone?: Array< string > | null,
  flag?: string | null,
  postalCode?: PostalCodeInput | null,
};

export type DeleteACountryInput = {
  id: string,
};

export type CreateALanguageInput = {
  id?: string | null,
  name: string,
  abbreviation: string,
};

export type ModelALanguageConditionInput = {
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  and?: Array< ModelALanguageConditionInput | null > | null,
  or?: Array< ModelALanguageConditionInput | null > | null,
  not?: ModelALanguageConditionInput | null,
};

export type UpdateALanguageInput = {
  id: string,
  name?: string | null,
  abbreviation?: string | null,
};

export type DeleteALanguageInput = {
  id: string,
};

export type CreateACurrencieInput = {
  id?: string | null,
  code: string,
  name: string,
  symbol: string,
};

export type ModelACurrencieConditionInput = {
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  and?: Array< ModelACurrencieConditionInput | null > | null,
  or?: Array< ModelACurrencieConditionInput | null > | null,
  not?: ModelACurrencieConditionInput | null,
};

export type UpdateACurrencieInput = {
  id: string,
  code?: string | null,
  name?: string | null,
  symbol?: string | null,
};

export type DeleteACurrencieInput = {
  id: string,
};

export type CreateAGuidePhoneInput = {
  id?: string | null,
  description?: string | null,
  width?: number | null,
  height?: number | null,
  depth?: number | null,
  weight?: number | null,
  display?: DisplayInput | null,
  camera?: CameraInput | null,
  battery?: BatteryInput | null,
  opSysyemID?: string | null,
};

export type DisplayInput = {
  resolution?: string | null,
  screenSize?: string | null,
  ppi?: string | null,
};

export type CameraInput = {
  primary?: number | null,
  secondary?: number | null,
  resolution?: string | null,
};

export type BatteryInput = {
  capacity?: number | null,
  duration?: number | null,
  usb?: string | null,
};

export type ModelAGuidePhoneConditionInput = {
  description?: ModelStringInput | null,
  width?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  depth?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  opSysyemID?: ModelIDInput | null,
  and?: Array< ModelAGuidePhoneConditionInput | null > | null,
  or?: Array< ModelAGuidePhoneConditionInput | null > | null,
  not?: ModelAGuidePhoneConditionInput | null,
};

export type AGuidePhone = {
  __typename: "AGuidePhone",
  id: string,
  description?: string | null,
  width?: number | null,
  height?: number | null,
  depth?: number | null,
  weight?: number | null,
  display?: Display | null,
  camera?: Camera | null,
  battery?: Battery | null,
  colors?: ModelAGuidePhonesColorsConnection | null,
  storages?: ModelAGuidePhonesStoragesConnection | null,
  opSysyemID?: string | null,
  opSystem?: AOpSystem | null,
  createdAt: string,
  updatedAt: string,
};

export type Display = {
  __typename: "Display",
  resolution?: string | null,
  screenSize?: string | null,
  ppi?: string | null,
};

export type Camera = {
  __typename: "Camera",
  primary?: number | null,
  secondary?: number | null,
  resolution?: string | null,
};

export type Battery = {
  __typename: "Battery",
  capacity?: number | null,
  duration?: number | null,
  usb?: string | null,
};

export type ModelAGuidePhonesColorsConnection = {
  __typename: "ModelAGuidePhonesColorsConnection",
  items:  Array<AGuidePhonesColors | null >,
  nextToken?: string | null,
};

export type AGuidePhonesColors = {
  __typename: "AGuidePhonesColors",
  id: string,
  aGuidePhoneId: string,
  aColorId: string,
  aGuidePhone: AGuidePhone,
  aColor: AColor,
  createdAt: string,
  updatedAt: string,
};

export type AColor = {
  __typename: "AColor",
  id: string,
  name: string,
  hexCode: string,
  guidePhones?: ModelAGuidePhonesColorsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAGuidePhonesStoragesConnection = {
  __typename: "ModelAGuidePhonesStoragesConnection",
  items:  Array<AGuidePhonesStorages | null >,
  nextToken?: string | null,
};

export type AGuidePhonesStorages = {
  __typename: "AGuidePhonesStorages",
  id: string,
  aGuidePhoneId: string,
  aStorageId: string,
  aGuidePhone: AGuidePhone,
  aStorage: AStorage,
  createdAt: string,
  updatedAt: string,
};

export type AStorage = {
  __typename: "AStorage",
  id: string,
  numberGB: number,
  guidePhones?: ModelAGuidePhonesStoragesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type AOpSystem = {
  __typename: "AOpSystem",
  id: string,
  name: string,
  image?: string | null,
  guidePhones?: ModelAGuidePhoneConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAGuidePhoneConnection = {
  __typename: "ModelAGuidePhoneConnection",
  items:  Array<AGuidePhone | null >,
  nextToken?: string | null,
};

export type UpdateAGuidePhoneInput = {
  id: string,
  description?: string | null,
  width?: number | null,
  height?: number | null,
  depth?: number | null,
  weight?: number | null,
  display?: DisplayInput | null,
  camera?: CameraInput | null,
  battery?: BatteryInput | null,
  opSysyemID?: string | null,
};

export type DeleteAGuidePhoneInput = {
  id: string,
};

export type CreateAColorInput = {
  id?: string | null,
  name: string,
  hexCode: string,
};

export type ModelAColorConditionInput = {
  name?: ModelStringInput | null,
  hexCode?: ModelStringInput | null,
  and?: Array< ModelAColorConditionInput | null > | null,
  or?: Array< ModelAColorConditionInput | null > | null,
  not?: ModelAColorConditionInput | null,
};

export type UpdateAColorInput = {
  id: string,
  name?: string | null,
  hexCode?: string | null,
};

export type DeleteAColorInput = {
  id: string,
};

export type CreateAStorageInput = {
  id?: string | null,
  numberGB: number,
};

export type ModelAStorageConditionInput = {
  numberGB?: ModelIntInput | null,
  and?: Array< ModelAStorageConditionInput | null > | null,
  or?: Array< ModelAStorageConditionInput | null > | null,
  not?: ModelAStorageConditionInput | null,
};

export type UpdateAStorageInput = {
  id: string,
  numberGB?: number | null,
};

export type DeleteAStorageInput = {
  id: string,
};

export type CreateAOpSystemInput = {
  id?: string | null,
  name: string,
  image?: string | null,
};

export type ModelAOpSystemConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelAOpSystemConditionInput | null > | null,
  or?: Array< ModelAOpSystemConditionInput | null > | null,
  not?: ModelAOpSystemConditionInput | null,
};

export type UpdateAOpSystemInput = {
  id: string,
  name?: string | null,
  image?: string | null,
};

export type DeleteAOpSystemInput = {
  id: string,
};

export type CreateACountriesLanguagesInput = {
  id?: string | null,
  aCountryId: string,
  aLanguageId: string,
};

export type ModelACountriesLanguagesConditionInput = {
  aCountryId?: ModelIDInput | null,
  aLanguageId?: ModelIDInput | null,
  and?: Array< ModelACountriesLanguagesConditionInput | null > | null,
  or?: Array< ModelACountriesLanguagesConditionInput | null > | null,
  not?: ModelACountriesLanguagesConditionInput | null,
};

export type UpdateACountriesLanguagesInput = {
  id: string,
  aCountryId?: string | null,
  aLanguageId?: string | null,
};

export type DeleteACountriesLanguagesInput = {
  id: string,
};

export type CreateACountriesCurrenciesInput = {
  id?: string | null,
  aCountryId: string,
  aCurrencieId: string,
};

export type ModelACountriesCurrenciesConditionInput = {
  aCountryId?: ModelIDInput | null,
  aCurrencieId?: ModelIDInput | null,
  and?: Array< ModelACountriesCurrenciesConditionInput | null > | null,
  or?: Array< ModelACountriesCurrenciesConditionInput | null > | null,
  not?: ModelACountriesCurrenciesConditionInput | null,
};

export type UpdateACountriesCurrenciesInput = {
  id: string,
  aCountryId?: string | null,
  aCurrencieId?: string | null,
};

export type DeleteACountriesCurrenciesInput = {
  id: string,
};

export type CreateAGuidePhonesColorsInput = {
  id?: string | null,
  aGuidePhoneId: string,
  aColorId: string,
};

export type ModelAGuidePhonesColorsConditionInput = {
  aGuidePhoneId?: ModelIDInput | null,
  aColorId?: ModelIDInput | null,
  and?: Array< ModelAGuidePhonesColorsConditionInput | null > | null,
  or?: Array< ModelAGuidePhonesColorsConditionInput | null > | null,
  not?: ModelAGuidePhonesColorsConditionInput | null,
};

export type UpdateAGuidePhonesColorsInput = {
  id: string,
  aGuidePhoneId?: string | null,
  aColorId?: string | null,
};

export type DeleteAGuidePhonesColorsInput = {
  id: string,
};

export type CreateAGuidePhonesStoragesInput = {
  id?: string | null,
  aGuidePhoneId: string,
  aStorageId: string,
};

export type ModelAGuidePhonesStoragesConditionInput = {
  aGuidePhoneId?: ModelIDInput | null,
  aStorageId?: ModelIDInput | null,
  and?: Array< ModelAGuidePhonesStoragesConditionInput | null > | null,
  or?: Array< ModelAGuidePhonesStoragesConditionInput | null > | null,
  not?: ModelAGuidePhonesStoragesConditionInput | null,
};

export type UpdateAGuidePhonesStoragesInput = {
  id: string,
  aGuidePhoneId?: string | null,
  aStorageId?: string | null,
};

export type DeleteAGuidePhonesStoragesInput = {
  id: string,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelAImageCarouselFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  route?: ModelStringInput | null,
  and?: Array< ModelAImageCarouselFilterInput | null > | null,
  or?: Array< ModelAImageCarouselFilterInput | null > | null,
  not?: ModelAImageCarouselFilterInput | null,
};

export type ModelAImageCarouselConnection = {
  __typename: "ModelAImageCarouselConnection",
  items:  Array<AImageCarousel | null >,
  nextToken?: string | null,
};

export type ModelABrandFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelABrandFilterInput | null > | null,
  or?: Array< ModelABrandFilterInput | null > | null,
  not?: ModelABrandFilterInput | null,
};

export type ModelABrandConnection = {
  __typename: "ModelABrandConnection",
  items:  Array<ABrand | null >,
  nextToken?: string | null,
};

export type ModelAProductTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelAProductTypeFilterInput | null > | null,
  or?: Array< ModelAProductTypeFilterInput | null > | null,
  not?: ModelAProductTypeFilterInput | null,
};

export type ModelAProductTypeConnection = {
  __typename: "ModelAProductTypeConnection",
  items:  Array<AProductType | null >,
  nextToken?: string | null,
};

export type ModelAPhoneFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  images?: ModelStringInput | null,
  maxPrice?: ModelFloatInput | null,
  minPrice?: ModelFloatInput | null,
  lastPrice?: ModelFloatInput | null,
  suggestedPrice?: ModelFloatInput | null,
  reviews?: ModelStringInput | null,
  ratings?: ModelIntInput | null,
  avgRating?: ModelFloatInput | null,
  brandID?: ModelIDInput | null,
  productTypeID?: ModelIDInput | null,
  and?: Array< ModelAPhoneFilterInput | null > | null,
  or?: Array< ModelAPhoneFilterInput | null > | null,
  not?: ModelAPhoneFilterInput | null,
};

export type ModelACarrierFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  countryID?: ModelIDInput | null,
  and?: Array< ModelACarrierFilterInput | null > | null,
  or?: Array< ModelACarrierFilterInput | null > | null,
  not?: ModelACarrierFilterInput | null,
};

export type ModelACountryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  officialName?: ModelStringInput | null,
  nativeName?: ModelStringInput | null,
  googleMaps?: ModelStringInput | null,
  timeZone?: ModelStringInput | null,
  flag?: ModelStringInput | null,
  and?: Array< ModelACountryFilterInput | null > | null,
  or?: Array< ModelACountryFilterInput | null > | null,
  not?: ModelACountryFilterInput | null,
};

export type ModelACountryConnection = {
  __typename: "ModelACountryConnection",
  items:  Array<ACountry | null >,
  nextToken?: string | null,
};

export type ModelALanguageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  and?: Array< ModelALanguageFilterInput | null > | null,
  or?: Array< ModelALanguageFilterInput | null > | null,
  not?: ModelALanguageFilterInput | null,
};

export type ModelALanguageConnection = {
  __typename: "ModelALanguageConnection",
  items:  Array<ALanguage | null >,
  nextToken?: string | null,
};

export type ModelACurrencieFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  and?: Array< ModelACurrencieFilterInput | null > | null,
  or?: Array< ModelACurrencieFilterInput | null > | null,
  not?: ModelACurrencieFilterInput | null,
};

export type ModelACurrencieConnection = {
  __typename: "ModelACurrencieConnection",
  items:  Array<ACurrencie | null >,
  nextToken?: string | null,
};

export type ModelAGuidePhoneFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  width?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  depth?: ModelFloatInput | null,
  weight?: ModelFloatInput | null,
  opSysyemID?: ModelIDInput | null,
  and?: Array< ModelAGuidePhoneFilterInput | null > | null,
  or?: Array< ModelAGuidePhoneFilterInput | null > | null,
  not?: ModelAGuidePhoneFilterInput | null,
};

export type ModelAColorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  hexCode?: ModelStringInput | null,
  and?: Array< ModelAColorFilterInput | null > | null,
  or?: Array< ModelAColorFilterInput | null > | null,
  not?: ModelAColorFilterInput | null,
};

export type ModelAColorConnection = {
  __typename: "ModelAColorConnection",
  items:  Array<AColor | null >,
  nextToken?: string | null,
};

export type ModelAStorageFilterInput = {
  id?: ModelIDInput | null,
  numberGB?: ModelIntInput | null,
  and?: Array< ModelAStorageFilterInput | null > | null,
  or?: Array< ModelAStorageFilterInput | null > | null,
  not?: ModelAStorageFilterInput | null,
};

export type ModelAStorageConnection = {
  __typename: "ModelAStorageConnection",
  items:  Array<AStorage | null >,
  nextToken?: string | null,
};

export type ModelAOpSystemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelAOpSystemFilterInput | null > | null,
  or?: Array< ModelAOpSystemFilterInput | null > | null,
  not?: ModelAOpSystemFilterInput | null,
};

export type ModelAOpSystemConnection = {
  __typename: "ModelAOpSystemConnection",
  items:  Array<AOpSystem | null >,
  nextToken?: string | null,
};

export type ModelACountriesLanguagesFilterInput = {
  id?: ModelIDInput | null,
  aCountryId?: ModelIDInput | null,
  aLanguageId?: ModelIDInput | null,
  and?: Array< ModelACountriesLanguagesFilterInput | null > | null,
  or?: Array< ModelACountriesLanguagesFilterInput | null > | null,
  not?: ModelACountriesLanguagesFilterInput | null,
};

export type ModelACountriesCurrenciesFilterInput = {
  id?: ModelIDInput | null,
  aCountryId?: ModelIDInput | null,
  aCurrencieId?: ModelIDInput | null,
  and?: Array< ModelACountriesCurrenciesFilterInput | null > | null,
  or?: Array< ModelACountriesCurrenciesFilterInput | null > | null,
  not?: ModelACountriesCurrenciesFilterInput | null,
};

export type ModelAGuidePhonesColorsFilterInput = {
  id?: ModelIDInput | null,
  aGuidePhoneId?: ModelIDInput | null,
  aColorId?: ModelIDInput | null,
  and?: Array< ModelAGuidePhonesColorsFilterInput | null > | null,
  or?: Array< ModelAGuidePhonesColorsFilterInput | null > | null,
  not?: ModelAGuidePhonesColorsFilterInput | null,
};

export type ModelAGuidePhonesStoragesFilterInput = {
  id?: ModelIDInput | null,
  aGuidePhoneId?: ModelIDInput | null,
  aStorageId?: ModelIDInput | null,
  and?: Array< ModelAGuidePhonesStoragesFilterInput | null > | null,
  or?: Array< ModelAGuidePhonesStoragesFilterInput | null > | null,
  not?: ModelAGuidePhonesStoragesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionAImageCarouselFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  route?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAImageCarouselFilterInput | null > | null,
  or?: Array< ModelSubscriptionAImageCarouselFilterInput | null > | null,
};

export type ModelSubscriptionABrandFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionABrandFilterInput | null > | null,
  or?: Array< ModelSubscriptionABrandFilterInput | null > | null,
};

export type ModelSubscriptionAProductTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAProductTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionAProductTypeFilterInput | null > | null,
};

export type ModelSubscriptionAPhoneFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  maxPrice?: ModelSubscriptionFloatInput | null,
  minPrice?: ModelSubscriptionFloatInput | null,
  lastPrice?: ModelSubscriptionFloatInput | null,
  suggestedPrice?: ModelSubscriptionFloatInput | null,
  reviews?: ModelSubscriptionStringInput | null,
  ratings?: ModelSubscriptionIntInput | null,
  avgRating?: ModelSubscriptionFloatInput | null,
  brandID?: ModelSubscriptionIDInput | null,
  productTypeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAPhoneFilterInput | null > | null,
  or?: Array< ModelSubscriptionAPhoneFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionACarrierFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  countryID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionACarrierFilterInput | null > | null,
  or?: Array< ModelSubscriptionACarrierFilterInput | null > | null,
};

export type ModelSubscriptionACountryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  officialName?: ModelSubscriptionStringInput | null,
  nativeName?: ModelSubscriptionStringInput | null,
  googleMaps?: ModelSubscriptionStringInput | null,
  timeZone?: ModelSubscriptionStringInput | null,
  flag?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionACountryFilterInput | null > | null,
  or?: Array< ModelSubscriptionACountryFilterInput | null > | null,
};

export type ModelSubscriptionALanguageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  abbreviation?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionALanguageFilterInput | null > | null,
  or?: Array< ModelSubscriptionALanguageFilterInput | null > | null,
};

export type ModelSubscriptionACurrencieFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  code?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  symbol?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionACurrencieFilterInput | null > | null,
  or?: Array< ModelSubscriptionACurrencieFilterInput | null > | null,
};

export type ModelSubscriptionAGuidePhoneFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  width?: ModelSubscriptionFloatInput | null,
  height?: ModelSubscriptionFloatInput | null,
  depth?: ModelSubscriptionFloatInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  opSysyemID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAGuidePhoneFilterInput | null > | null,
  or?: Array< ModelSubscriptionAGuidePhoneFilterInput | null > | null,
};

export type ModelSubscriptionAColorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  hexCode?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAColorFilterInput | null > | null,
  or?: Array< ModelSubscriptionAColorFilterInput | null > | null,
};

export type ModelSubscriptionAStorageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  numberGB?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionAStorageFilterInput | null > | null,
  or?: Array< ModelSubscriptionAStorageFilterInput | null > | null,
};

export type ModelSubscriptionAOpSystemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAOpSystemFilterInput | null > | null,
  or?: Array< ModelSubscriptionAOpSystemFilterInput | null > | null,
};

export type ModelSubscriptionACountriesLanguagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aCountryId?: ModelSubscriptionIDInput | null,
  aLanguageId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionACountriesLanguagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionACountriesLanguagesFilterInput | null > | null,
};

export type ModelSubscriptionACountriesCurrenciesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aCountryId?: ModelSubscriptionIDInput | null,
  aCurrencieId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionACountriesCurrenciesFilterInput | null > | null,
  or?: Array< ModelSubscriptionACountriesCurrenciesFilterInput | null > | null,
};

export type ModelSubscriptionAGuidePhonesColorsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aGuidePhoneId?: ModelSubscriptionIDInput | null,
  aColorId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAGuidePhonesColorsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAGuidePhonesColorsFilterInput | null > | null,
};

export type ModelSubscriptionAGuidePhonesStoragesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aGuidePhoneId?: ModelSubscriptionIDInput | null,
  aStorageId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAGuidePhonesStoragesFilterInput | null > | null,
  or?: Array< ModelSubscriptionAGuidePhonesStoragesFilterInput | null > | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blog?:  {
          __typename: "Blog",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blog?:  {
          __typename: "Blog",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blog?:  {
          __typename: "Blog",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          postCommentsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          postCommentsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          postCommentsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type CreateAImageCarouselMutationVariables = {
  input: CreateAImageCarouselInput,
  condition?: ModelAImageCarouselConditionInput | null,
};

export type CreateAImageCarouselMutation = {
  createAImageCarousel?:  {
    __typename: "AImageCarousel",
    id: string,
    image: string,
    description?: string | null,
    route?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAImageCarouselMutationVariables = {
  input: UpdateAImageCarouselInput,
  condition?: ModelAImageCarouselConditionInput | null,
};

export type UpdateAImageCarouselMutation = {
  updateAImageCarousel?:  {
    __typename: "AImageCarousel",
    id: string,
    image: string,
    description?: string | null,
    route?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAImageCarouselMutationVariables = {
  input: DeleteAImageCarouselInput,
  condition?: ModelAImageCarouselConditionInput | null,
};

export type DeleteAImageCarouselMutation = {
  deleteAImageCarousel?:  {
    __typename: "AImageCarousel",
    id: string,
    image: string,
    description?: string | null,
    route?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateABrandMutationVariables = {
  input: CreateABrandInput,
  condition?: ModelABrandConditionInput | null,
};

export type CreateABrandMutation = {
  createABrand?:  {
    __typename: "ABrand",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateABrandMutationVariables = {
  input: UpdateABrandInput,
  condition?: ModelABrandConditionInput | null,
};

export type UpdateABrandMutation = {
  updateABrand?:  {
    __typename: "ABrand",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteABrandMutationVariables = {
  input: DeleteABrandInput,
  condition?: ModelABrandConditionInput | null,
};

export type DeleteABrandMutation = {
  deleteABrand?:  {
    __typename: "ABrand",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAProductTypeMutationVariables = {
  input: CreateAProductTypeInput,
  condition?: ModelAProductTypeConditionInput | null,
};

export type CreateAProductTypeMutation = {
  createAProductType?:  {
    __typename: "AProductType",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAProductTypeMutationVariables = {
  input: UpdateAProductTypeInput,
  condition?: ModelAProductTypeConditionInput | null,
};

export type UpdateAProductTypeMutation = {
  updateAProductType?:  {
    __typename: "AProductType",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAProductTypeMutationVariables = {
  input: DeleteAProductTypeInput,
  condition?: ModelAProductTypeConditionInput | null,
};

export type DeleteAProductTypeMutation = {
  deleteAProductType?:  {
    __typename: "AProductType",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAPhoneMutationVariables = {
  input: CreateAPhoneInput,
  condition?: ModelAPhoneConditionInput | null,
};

export type CreateAPhoneMutation = {
  createAPhone?:  {
    __typename: "APhone",
    id: string,
    name?: string | null,
    images?: Array< string | null > | null,
    maxPrice?: number | null,
    minPrice?: number | null,
    lastPrice?: number | null,
    suggestedPrice?: number | null,
    reviews?: Array< string | null > | null,
    ratings?: Array< number | null > | null,
    avgRating?: number | null,
    brandID: string,
    brand?:  {
      __typename: "ABrand",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productTypeID: string,
    productType?:  {
      __typename: "AProductType",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAPhoneMutationVariables = {
  input: UpdateAPhoneInput,
  condition?: ModelAPhoneConditionInput | null,
};

export type UpdateAPhoneMutation = {
  updateAPhone?:  {
    __typename: "APhone",
    id: string,
    name?: string | null,
    images?: Array< string | null > | null,
    maxPrice?: number | null,
    minPrice?: number | null,
    lastPrice?: number | null,
    suggestedPrice?: number | null,
    reviews?: Array< string | null > | null,
    ratings?: Array< number | null > | null,
    avgRating?: number | null,
    brandID: string,
    brand?:  {
      __typename: "ABrand",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productTypeID: string,
    productType?:  {
      __typename: "AProductType",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAPhoneMutationVariables = {
  input: DeleteAPhoneInput,
  condition?: ModelAPhoneConditionInput | null,
};

export type DeleteAPhoneMutation = {
  deleteAPhone?:  {
    __typename: "APhone",
    id: string,
    name?: string | null,
    images?: Array< string | null > | null,
    maxPrice?: number | null,
    minPrice?: number | null,
    lastPrice?: number | null,
    suggestedPrice?: number | null,
    reviews?: Array< string | null > | null,
    ratings?: Array< number | null > | null,
    avgRating?: number | null,
    brandID: string,
    brand?:  {
      __typename: "ABrand",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productTypeID: string,
    productType?:  {
      __typename: "AProductType",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateACarrierMutationVariables = {
  input: CreateACarrierInput,
  condition?: ModelACarrierConditionInput | null,
};

export type CreateACarrierMutation = {
  createACarrier?:  {
    __typename: "ACarrier",
    id: string,
    name: string,
    image: string,
    countryID: string,
    country?:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateACarrierMutationVariables = {
  input: UpdateACarrierInput,
  condition?: ModelACarrierConditionInput | null,
};

export type UpdateACarrierMutation = {
  updateACarrier?:  {
    __typename: "ACarrier",
    id: string,
    name: string,
    image: string,
    countryID: string,
    country?:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteACarrierMutationVariables = {
  input: DeleteACarrierInput,
  condition?: ModelACarrierConditionInput | null,
};

export type DeleteACarrierMutation = {
  deleteACarrier?:  {
    __typename: "ACarrier",
    id: string,
    name: string,
    image: string,
    countryID: string,
    country?:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateACountryMutationVariables = {
  input: CreateACountryInput,
  condition?: ModelACountryConditionInput | null,
};

export type CreateACountryMutation = {
  createACountry?:  {
    __typename: "ACountry",
    id: string,
    name: string,
    officialName?: string | null,
    nativeName?: string | null,
    idd?:  {
      __typename: "Idd",
      root?: string | null,
      suffixes?: Array< string | null > | null,
    } | null,
    googleMaps?: string | null,
    timeZone?: Array< string > | null,
    flag?: string | null,
    postalCode?:  {
      __typename: "PostalCode",
      format?: string | null,
      regex?: string | null,
    } | null,
    carriers?:  {
      __typename: "ModelACarrierConnection",
      items:  Array< {
        __typename: "ACarrier",
        id: string,
        name: string,
        image: string,
        countryID: string,
        country?:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    languages?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    currencies?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateACountryMutationVariables = {
  input: UpdateACountryInput,
  condition?: ModelACountryConditionInput | null,
};

export type UpdateACountryMutation = {
  updateACountry?:  {
    __typename: "ACountry",
    id: string,
    name: string,
    officialName?: string | null,
    nativeName?: string | null,
    idd?:  {
      __typename: "Idd",
      root?: string | null,
      suffixes?: Array< string | null > | null,
    } | null,
    googleMaps?: string | null,
    timeZone?: Array< string > | null,
    flag?: string | null,
    postalCode?:  {
      __typename: "PostalCode",
      format?: string | null,
      regex?: string | null,
    } | null,
    carriers?:  {
      __typename: "ModelACarrierConnection",
      items:  Array< {
        __typename: "ACarrier",
        id: string,
        name: string,
        image: string,
        countryID: string,
        country?:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    languages?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    currencies?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteACountryMutationVariables = {
  input: DeleteACountryInput,
  condition?: ModelACountryConditionInput | null,
};

export type DeleteACountryMutation = {
  deleteACountry?:  {
    __typename: "ACountry",
    id: string,
    name: string,
    officialName?: string | null,
    nativeName?: string | null,
    idd?:  {
      __typename: "Idd",
      root?: string | null,
      suffixes?: Array< string | null > | null,
    } | null,
    googleMaps?: string | null,
    timeZone?: Array< string > | null,
    flag?: string | null,
    postalCode?:  {
      __typename: "PostalCode",
      format?: string | null,
      regex?: string | null,
    } | null,
    carriers?:  {
      __typename: "ModelACarrierConnection",
      items:  Array< {
        __typename: "ACarrier",
        id: string,
        name: string,
        image: string,
        countryID: string,
        country?:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    languages?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    currencies?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateALanguageMutationVariables = {
  input: CreateALanguageInput,
  condition?: ModelALanguageConditionInput | null,
};

export type CreateALanguageMutation = {
  createALanguage?:  {
    __typename: "ALanguage",
    id: string,
    name: string,
    abbreviation: string,
    countries?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateALanguageMutationVariables = {
  input: UpdateALanguageInput,
  condition?: ModelALanguageConditionInput | null,
};

export type UpdateALanguageMutation = {
  updateALanguage?:  {
    __typename: "ALanguage",
    id: string,
    name: string,
    abbreviation: string,
    countries?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteALanguageMutationVariables = {
  input: DeleteALanguageInput,
  condition?: ModelALanguageConditionInput | null,
};

export type DeleteALanguageMutation = {
  deleteALanguage?:  {
    __typename: "ALanguage",
    id: string,
    name: string,
    abbreviation: string,
    countries?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateACurrencieMutationVariables = {
  input: CreateACurrencieInput,
  condition?: ModelACurrencieConditionInput | null,
};

export type CreateACurrencieMutation = {
  createACurrencie?:  {
    __typename: "ACurrencie",
    id: string,
    code: string,
    name: string,
    symbol: string,
    countries?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateACurrencieMutationVariables = {
  input: UpdateACurrencieInput,
  condition?: ModelACurrencieConditionInput | null,
};

export type UpdateACurrencieMutation = {
  updateACurrencie?:  {
    __typename: "ACurrencie",
    id: string,
    code: string,
    name: string,
    symbol: string,
    countries?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteACurrencieMutationVariables = {
  input: DeleteACurrencieInput,
  condition?: ModelACurrencieConditionInput | null,
};

export type DeleteACurrencieMutation = {
  deleteACurrencie?:  {
    __typename: "ACurrencie",
    id: string,
    code: string,
    name: string,
    symbol: string,
    countries?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAGuidePhoneMutationVariables = {
  input: CreateAGuidePhoneInput,
  condition?: ModelAGuidePhoneConditionInput | null,
};

export type CreateAGuidePhoneMutation = {
  createAGuidePhone?:  {
    __typename: "AGuidePhone",
    id: string,
    description?: string | null,
    width?: number | null,
    height?: number | null,
    depth?: number | null,
    weight?: number | null,
    display?:  {
      __typename: "Display",
      resolution?: string | null,
      screenSize?: string | null,
      ppi?: string | null,
    } | null,
    camera?:  {
      __typename: "Camera",
      primary?: number | null,
      secondary?: number | null,
      resolution?: string | null,
    } | null,
    battery?:  {
      __typename: "Battery",
      capacity?: number | null,
      duration?: number | null,
      usb?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    storages?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    opSysyemID?: string | null,
    opSystem?:  {
      __typename: "AOpSystem",
      id: string,
      name: string,
      image?: string | null,
      guidePhones?:  {
        __typename: "ModelAGuidePhoneConnection",
        items:  Array< {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAGuidePhoneMutationVariables = {
  input: UpdateAGuidePhoneInput,
  condition?: ModelAGuidePhoneConditionInput | null,
};

export type UpdateAGuidePhoneMutation = {
  updateAGuidePhone?:  {
    __typename: "AGuidePhone",
    id: string,
    description?: string | null,
    width?: number | null,
    height?: number | null,
    depth?: number | null,
    weight?: number | null,
    display?:  {
      __typename: "Display",
      resolution?: string | null,
      screenSize?: string | null,
      ppi?: string | null,
    } | null,
    camera?:  {
      __typename: "Camera",
      primary?: number | null,
      secondary?: number | null,
      resolution?: string | null,
    } | null,
    battery?:  {
      __typename: "Battery",
      capacity?: number | null,
      duration?: number | null,
      usb?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    storages?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    opSysyemID?: string | null,
    opSystem?:  {
      __typename: "AOpSystem",
      id: string,
      name: string,
      image?: string | null,
      guidePhones?:  {
        __typename: "ModelAGuidePhoneConnection",
        items:  Array< {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAGuidePhoneMutationVariables = {
  input: DeleteAGuidePhoneInput,
  condition?: ModelAGuidePhoneConditionInput | null,
};

export type DeleteAGuidePhoneMutation = {
  deleteAGuidePhone?:  {
    __typename: "AGuidePhone",
    id: string,
    description?: string | null,
    width?: number | null,
    height?: number | null,
    depth?: number | null,
    weight?: number | null,
    display?:  {
      __typename: "Display",
      resolution?: string | null,
      screenSize?: string | null,
      ppi?: string | null,
    } | null,
    camera?:  {
      __typename: "Camera",
      primary?: number | null,
      secondary?: number | null,
      resolution?: string | null,
    } | null,
    battery?:  {
      __typename: "Battery",
      capacity?: number | null,
      duration?: number | null,
      usb?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    storages?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    opSysyemID?: string | null,
    opSystem?:  {
      __typename: "AOpSystem",
      id: string,
      name: string,
      image?: string | null,
      guidePhones?:  {
        __typename: "ModelAGuidePhoneConnection",
        items:  Array< {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAColorMutationVariables = {
  input: CreateAColorInput,
  condition?: ModelAColorConditionInput | null,
};

export type CreateAColorMutation = {
  createAColor?:  {
    __typename: "AColor",
    id: string,
    name: string,
    hexCode: string,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAColorMutationVariables = {
  input: UpdateAColorInput,
  condition?: ModelAColorConditionInput | null,
};

export type UpdateAColorMutation = {
  updateAColor?:  {
    __typename: "AColor",
    id: string,
    name: string,
    hexCode: string,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAColorMutationVariables = {
  input: DeleteAColorInput,
  condition?: ModelAColorConditionInput | null,
};

export type DeleteAColorMutation = {
  deleteAColor?:  {
    __typename: "AColor",
    id: string,
    name: string,
    hexCode: string,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAStorageMutationVariables = {
  input: CreateAStorageInput,
  condition?: ModelAStorageConditionInput | null,
};

export type CreateAStorageMutation = {
  createAStorage?:  {
    __typename: "AStorage",
    id: string,
    numberGB: number,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAStorageMutationVariables = {
  input: UpdateAStorageInput,
  condition?: ModelAStorageConditionInput | null,
};

export type UpdateAStorageMutation = {
  updateAStorage?:  {
    __typename: "AStorage",
    id: string,
    numberGB: number,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAStorageMutationVariables = {
  input: DeleteAStorageInput,
  condition?: ModelAStorageConditionInput | null,
};

export type DeleteAStorageMutation = {
  deleteAStorage?:  {
    __typename: "AStorage",
    id: string,
    numberGB: number,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAOpSystemMutationVariables = {
  input: CreateAOpSystemInput,
  condition?: ModelAOpSystemConditionInput | null,
};

export type CreateAOpSystemMutation = {
  createAOpSystem?:  {
    __typename: "AOpSystem",
    id: string,
    name: string,
    image?: string | null,
    guidePhones?:  {
      __typename: "ModelAGuidePhoneConnection",
      items:  Array< {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAOpSystemMutationVariables = {
  input: UpdateAOpSystemInput,
  condition?: ModelAOpSystemConditionInput | null,
};

export type UpdateAOpSystemMutation = {
  updateAOpSystem?:  {
    __typename: "AOpSystem",
    id: string,
    name: string,
    image?: string | null,
    guidePhones?:  {
      __typename: "ModelAGuidePhoneConnection",
      items:  Array< {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAOpSystemMutationVariables = {
  input: DeleteAOpSystemInput,
  condition?: ModelAOpSystemConditionInput | null,
};

export type DeleteAOpSystemMutation = {
  deleteAOpSystem?:  {
    __typename: "AOpSystem",
    id: string,
    name: string,
    image?: string | null,
    guidePhones?:  {
      __typename: "ModelAGuidePhoneConnection",
      items:  Array< {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateACountriesLanguagesMutationVariables = {
  input: CreateACountriesLanguagesInput,
  condition?: ModelACountriesLanguagesConditionInput | null,
};

export type CreateACountriesLanguagesMutation = {
  createACountriesLanguages?:  {
    __typename: "ACountriesLanguages",
    id: string,
    aCountryId: string,
    aLanguageId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aLanguage:  {
      __typename: "ALanguage",
      id: string,
      name: string,
      abbreviation: string,
      countries?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateACountriesLanguagesMutationVariables = {
  input: UpdateACountriesLanguagesInput,
  condition?: ModelACountriesLanguagesConditionInput | null,
};

export type UpdateACountriesLanguagesMutation = {
  updateACountriesLanguages?:  {
    __typename: "ACountriesLanguages",
    id: string,
    aCountryId: string,
    aLanguageId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aLanguage:  {
      __typename: "ALanguage",
      id: string,
      name: string,
      abbreviation: string,
      countries?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteACountriesLanguagesMutationVariables = {
  input: DeleteACountriesLanguagesInput,
  condition?: ModelACountriesLanguagesConditionInput | null,
};

export type DeleteACountriesLanguagesMutation = {
  deleteACountriesLanguages?:  {
    __typename: "ACountriesLanguages",
    id: string,
    aCountryId: string,
    aLanguageId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aLanguage:  {
      __typename: "ALanguage",
      id: string,
      name: string,
      abbreviation: string,
      countries?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateACountriesCurrenciesMutationVariables = {
  input: CreateACountriesCurrenciesInput,
  condition?: ModelACountriesCurrenciesConditionInput | null,
};

export type CreateACountriesCurrenciesMutation = {
  createACountriesCurrencies?:  {
    __typename: "ACountriesCurrencies",
    id: string,
    aCountryId: string,
    aCurrencieId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aCurrencie:  {
      __typename: "ACurrencie",
      id: string,
      code: string,
      name: string,
      symbol: string,
      countries?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateACountriesCurrenciesMutationVariables = {
  input: UpdateACountriesCurrenciesInput,
  condition?: ModelACountriesCurrenciesConditionInput | null,
};

export type UpdateACountriesCurrenciesMutation = {
  updateACountriesCurrencies?:  {
    __typename: "ACountriesCurrencies",
    id: string,
    aCountryId: string,
    aCurrencieId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aCurrencie:  {
      __typename: "ACurrencie",
      id: string,
      code: string,
      name: string,
      symbol: string,
      countries?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteACountriesCurrenciesMutationVariables = {
  input: DeleteACountriesCurrenciesInput,
  condition?: ModelACountriesCurrenciesConditionInput | null,
};

export type DeleteACountriesCurrenciesMutation = {
  deleteACountriesCurrencies?:  {
    __typename: "ACountriesCurrencies",
    id: string,
    aCountryId: string,
    aCurrencieId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aCurrencie:  {
      __typename: "ACurrencie",
      id: string,
      code: string,
      name: string,
      symbol: string,
      countries?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAGuidePhonesColorsMutationVariables = {
  input: CreateAGuidePhonesColorsInput,
  condition?: ModelAGuidePhonesColorsConditionInput | null,
};

export type CreateAGuidePhonesColorsMutation = {
  createAGuidePhonesColors?:  {
    __typename: "AGuidePhonesColors",
    id: string,
    aGuidePhoneId: string,
    aColorId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aColor:  {
      __typename: "AColor",
      id: string,
      name: string,
      hexCode: string,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAGuidePhonesColorsMutationVariables = {
  input: UpdateAGuidePhonesColorsInput,
  condition?: ModelAGuidePhonesColorsConditionInput | null,
};

export type UpdateAGuidePhonesColorsMutation = {
  updateAGuidePhonesColors?:  {
    __typename: "AGuidePhonesColors",
    id: string,
    aGuidePhoneId: string,
    aColorId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aColor:  {
      __typename: "AColor",
      id: string,
      name: string,
      hexCode: string,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAGuidePhonesColorsMutationVariables = {
  input: DeleteAGuidePhonesColorsInput,
  condition?: ModelAGuidePhonesColorsConditionInput | null,
};

export type DeleteAGuidePhonesColorsMutation = {
  deleteAGuidePhonesColors?:  {
    __typename: "AGuidePhonesColors",
    id: string,
    aGuidePhoneId: string,
    aColorId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aColor:  {
      __typename: "AColor",
      id: string,
      name: string,
      hexCode: string,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAGuidePhonesStoragesMutationVariables = {
  input: CreateAGuidePhonesStoragesInput,
  condition?: ModelAGuidePhonesStoragesConditionInput | null,
};

export type CreateAGuidePhonesStoragesMutation = {
  createAGuidePhonesStorages?:  {
    __typename: "AGuidePhonesStorages",
    id: string,
    aGuidePhoneId: string,
    aStorageId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aStorage:  {
      __typename: "AStorage",
      id: string,
      numberGB: number,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAGuidePhonesStoragesMutationVariables = {
  input: UpdateAGuidePhonesStoragesInput,
  condition?: ModelAGuidePhonesStoragesConditionInput | null,
};

export type UpdateAGuidePhonesStoragesMutation = {
  updateAGuidePhonesStorages?:  {
    __typename: "AGuidePhonesStorages",
    id: string,
    aGuidePhoneId: string,
    aStorageId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aStorage:  {
      __typename: "AStorage",
      id: string,
      numberGB: number,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAGuidePhonesStoragesMutationVariables = {
  input: DeleteAGuidePhonesStoragesInput,
  condition?: ModelAGuidePhonesStoragesConditionInput | null,
};

export type DeleteAGuidePhonesStoragesMutation = {
  deleteAGuidePhonesStorages?:  {
    __typename: "AGuidePhonesStorages",
    id: string,
    aGuidePhoneId: string,
    aStorageId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aStorage:  {
      __typename: "AStorage",
      id: string,
      numberGB: number,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blog?:  {
          __typename: "Blog",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          postCommentsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          postCommentsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        blog?:  {
          __typename: "Blog",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAImageCarouselQueryVariables = {
  id: string,
};

export type GetAImageCarouselQuery = {
  getAImageCarousel?:  {
    __typename: "AImageCarousel",
    id: string,
    image: string,
    description?: string | null,
    route?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAImageCarouselsQueryVariables = {
  filter?: ModelAImageCarouselFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAImageCarouselsQuery = {
  listAImageCarousels?:  {
    __typename: "ModelAImageCarouselConnection",
    items:  Array< {
      __typename: "AImageCarousel",
      id: string,
      image: string,
      description?: string | null,
      route?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetABrandQueryVariables = {
  id: string,
};

export type GetABrandQuery = {
  getABrand?:  {
    __typename: "ABrand",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListABrandsQueryVariables = {
  filter?: ModelABrandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListABrandsQuery = {
  listABrands?:  {
    __typename: "ModelABrandConnection",
    items:  Array< {
      __typename: "ABrand",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAProductTypeQueryVariables = {
  id: string,
};

export type GetAProductTypeQuery = {
  getAProductType?:  {
    __typename: "AProductType",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAProductTypesQueryVariables = {
  filter?: ModelAProductTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAProductTypesQuery = {
  listAProductTypes?:  {
    __typename: "ModelAProductTypeConnection",
    items:  Array< {
      __typename: "AProductType",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAPhoneQueryVariables = {
  id: string,
};

export type GetAPhoneQuery = {
  getAPhone?:  {
    __typename: "APhone",
    id: string,
    name?: string | null,
    images?: Array< string | null > | null,
    maxPrice?: number | null,
    minPrice?: number | null,
    lastPrice?: number | null,
    suggestedPrice?: number | null,
    reviews?: Array< string | null > | null,
    ratings?: Array< number | null > | null,
    avgRating?: number | null,
    brandID: string,
    brand?:  {
      __typename: "ABrand",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productTypeID: string,
    productType?:  {
      __typename: "AProductType",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAPhonesQueryVariables = {
  filter?: ModelAPhoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAPhonesQuery = {
  listAPhones?:  {
    __typename: "ModelAPhoneConnection",
    items:  Array< {
      __typename: "APhone",
      id: string,
      name?: string | null,
      images?: Array< string | null > | null,
      maxPrice?: number | null,
      minPrice?: number | null,
      lastPrice?: number | null,
      suggestedPrice?: number | null,
      reviews?: Array< string | null > | null,
      ratings?: Array< number | null > | null,
      avgRating?: number | null,
      brandID: string,
      brand?:  {
        __typename: "ABrand",
        id: string,
        name?: string | null,
        image?: string | null,
        phones?:  {
          __typename: "ModelAPhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      productTypeID: string,
      productType?:  {
        __typename: "AProductType",
        id: string,
        name?: string | null,
        image?: string | null,
        phones?:  {
          __typename: "ModelAPhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetACarrierQueryVariables = {
  id: string,
};

export type GetACarrierQuery = {
  getACarrier?:  {
    __typename: "ACarrier",
    id: string,
    name: string,
    image: string,
    countryID: string,
    country?:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListACarriersQueryVariables = {
  filter?: ModelACarrierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListACarriersQuery = {
  listACarriers?:  {
    __typename: "ModelACarrierConnection",
    items:  Array< {
      __typename: "ACarrier",
      id: string,
      name: string,
      image: string,
      countryID: string,
      country?:  {
        __typename: "ACountry",
        id: string,
        name: string,
        officialName?: string | null,
        nativeName?: string | null,
        idd?:  {
          __typename: "Idd",
          root?: string | null,
          suffixes?: Array< string | null > | null,
        } | null,
        googleMaps?: string | null,
        timeZone?: Array< string > | null,
        flag?: string | null,
        postalCode?:  {
          __typename: "PostalCode",
          format?: string | null,
          regex?: string | null,
        } | null,
        carriers?:  {
          __typename: "ModelACarrierConnection",
          nextToken?: string | null,
        } | null,
        languages?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        currencies?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetACountryQueryVariables = {
  id: string,
};

export type GetACountryQuery = {
  getACountry?:  {
    __typename: "ACountry",
    id: string,
    name: string,
    officialName?: string | null,
    nativeName?: string | null,
    idd?:  {
      __typename: "Idd",
      root?: string | null,
      suffixes?: Array< string | null > | null,
    } | null,
    googleMaps?: string | null,
    timeZone?: Array< string > | null,
    flag?: string | null,
    postalCode?:  {
      __typename: "PostalCode",
      format?: string | null,
      regex?: string | null,
    } | null,
    carriers?:  {
      __typename: "ModelACarrierConnection",
      items:  Array< {
        __typename: "ACarrier",
        id: string,
        name: string,
        image: string,
        countryID: string,
        country?:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    languages?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    currencies?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListACountriesQueryVariables = {
  filter?: ModelACountryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListACountriesQuery = {
  listACountries?:  {
    __typename: "ModelACountryConnection",
    items:  Array< {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetALanguageQueryVariables = {
  id: string,
};

export type GetALanguageQuery = {
  getALanguage?:  {
    __typename: "ALanguage",
    id: string,
    name: string,
    abbreviation: string,
    countries?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListALanguagesQueryVariables = {
  filter?: ModelALanguageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListALanguagesQuery = {
  listALanguages?:  {
    __typename: "ModelALanguageConnection",
    items:  Array< {
      __typename: "ALanguage",
      id: string,
      name: string,
      abbreviation: string,
      countries?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetACurrencieQueryVariables = {
  id: string,
};

export type GetACurrencieQuery = {
  getACurrencie?:  {
    __typename: "ACurrencie",
    id: string,
    code: string,
    name: string,
    symbol: string,
    countries?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListACurrenciesQueryVariables = {
  filter?: ModelACurrencieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListACurrenciesQuery = {
  listACurrencies?:  {
    __typename: "ModelACurrencieConnection",
    items:  Array< {
      __typename: "ACurrencie",
      id: string,
      code: string,
      name: string,
      symbol: string,
      countries?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAGuidePhoneQueryVariables = {
  id: string,
};

export type GetAGuidePhoneQuery = {
  getAGuidePhone?:  {
    __typename: "AGuidePhone",
    id: string,
    description?: string | null,
    width?: number | null,
    height?: number | null,
    depth?: number | null,
    weight?: number | null,
    display?:  {
      __typename: "Display",
      resolution?: string | null,
      screenSize?: string | null,
      ppi?: string | null,
    } | null,
    camera?:  {
      __typename: "Camera",
      primary?: number | null,
      secondary?: number | null,
      resolution?: string | null,
    } | null,
    battery?:  {
      __typename: "Battery",
      capacity?: number | null,
      duration?: number | null,
      usb?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    storages?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    opSysyemID?: string | null,
    opSystem?:  {
      __typename: "AOpSystem",
      id: string,
      name: string,
      image?: string | null,
      guidePhones?:  {
        __typename: "ModelAGuidePhoneConnection",
        items:  Array< {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAGuidePhonesQueryVariables = {
  filter?: ModelAGuidePhoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAGuidePhonesQuery = {
  listAGuidePhones?:  {
    __typename: "ModelAGuidePhoneConnection",
    items:  Array< {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAColorQueryVariables = {
  id: string,
};

export type GetAColorQuery = {
  getAColor?:  {
    __typename: "AColor",
    id: string,
    name: string,
    hexCode: string,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAColorsQueryVariables = {
  filter?: ModelAColorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAColorsQuery = {
  listAColors?:  {
    __typename: "ModelAColorConnection",
    items:  Array< {
      __typename: "AColor",
      id: string,
      name: string,
      hexCode: string,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAStorageQueryVariables = {
  id: string,
};

export type GetAStorageQuery = {
  getAStorage?:  {
    __typename: "AStorage",
    id: string,
    numberGB: number,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAStoragesQueryVariables = {
  filter?: ModelAStorageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAStoragesQuery = {
  listAStorages?:  {
    __typename: "ModelAStorageConnection",
    items:  Array< {
      __typename: "AStorage",
      id: string,
      numberGB: number,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAOpSystemQueryVariables = {
  id: string,
};

export type GetAOpSystemQuery = {
  getAOpSystem?:  {
    __typename: "AOpSystem",
    id: string,
    name: string,
    image?: string | null,
    guidePhones?:  {
      __typename: "ModelAGuidePhoneConnection",
      items:  Array< {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAOpSystemsQueryVariables = {
  filter?: ModelAOpSystemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAOpSystemsQuery = {
  listAOpSystems?:  {
    __typename: "ModelAOpSystemConnection",
    items:  Array< {
      __typename: "AOpSystem",
      id: string,
      name: string,
      image?: string | null,
      guidePhones?:  {
        __typename: "ModelAGuidePhoneConnection",
        items:  Array< {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetACountriesLanguagesQueryVariables = {
  id: string,
};

export type GetACountriesLanguagesQuery = {
  getACountriesLanguages?:  {
    __typename: "ACountriesLanguages",
    id: string,
    aCountryId: string,
    aLanguageId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aLanguage:  {
      __typename: "ALanguage",
      id: string,
      name: string,
      abbreviation: string,
      countries?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListACountriesLanguagesQueryVariables = {
  filter?: ModelACountriesLanguagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListACountriesLanguagesQuery = {
  listACountriesLanguages?:  {
    __typename: "ModelACountriesLanguagesConnection",
    items:  Array< {
      __typename: "ACountriesLanguages",
      id: string,
      aCountryId: string,
      aLanguageId: string,
      aCountry:  {
        __typename: "ACountry",
        id: string,
        name: string,
        officialName?: string | null,
        nativeName?: string | null,
        idd?:  {
          __typename: "Idd",
          root?: string | null,
          suffixes?: Array< string | null > | null,
        } | null,
        googleMaps?: string | null,
        timeZone?: Array< string > | null,
        flag?: string | null,
        postalCode?:  {
          __typename: "PostalCode",
          format?: string | null,
          regex?: string | null,
        } | null,
        carriers?:  {
          __typename: "ModelACarrierConnection",
          nextToken?: string | null,
        } | null,
        languages?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        currencies?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aLanguage:  {
        __typename: "ALanguage",
        id: string,
        name: string,
        abbreviation: string,
        countries?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetACountriesCurrenciesQueryVariables = {
  id: string,
};

export type GetACountriesCurrenciesQuery = {
  getACountriesCurrencies?:  {
    __typename: "ACountriesCurrencies",
    id: string,
    aCountryId: string,
    aCurrencieId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aCurrencie:  {
      __typename: "ACurrencie",
      id: string,
      code: string,
      name: string,
      symbol: string,
      countries?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListACountriesCurrenciesQueryVariables = {
  filter?: ModelACountriesCurrenciesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListACountriesCurrenciesQuery = {
  listACountriesCurrencies?:  {
    __typename: "ModelACountriesCurrenciesConnection",
    items:  Array< {
      __typename: "ACountriesCurrencies",
      id: string,
      aCountryId: string,
      aCurrencieId: string,
      aCountry:  {
        __typename: "ACountry",
        id: string,
        name: string,
        officialName?: string | null,
        nativeName?: string | null,
        idd?:  {
          __typename: "Idd",
          root?: string | null,
          suffixes?: Array< string | null > | null,
        } | null,
        googleMaps?: string | null,
        timeZone?: Array< string > | null,
        flag?: string | null,
        postalCode?:  {
          __typename: "PostalCode",
          format?: string | null,
          regex?: string | null,
        } | null,
        carriers?:  {
          __typename: "ModelACarrierConnection",
          nextToken?: string | null,
        } | null,
        languages?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        currencies?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aCurrencie:  {
        __typename: "ACurrencie",
        id: string,
        code: string,
        name: string,
        symbol: string,
        countries?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAGuidePhonesColorsQueryVariables = {
  id: string,
};

export type GetAGuidePhonesColorsQuery = {
  getAGuidePhonesColors?:  {
    __typename: "AGuidePhonesColors",
    id: string,
    aGuidePhoneId: string,
    aColorId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aColor:  {
      __typename: "AColor",
      id: string,
      name: string,
      hexCode: string,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAGuidePhonesColorsQueryVariables = {
  filter?: ModelAGuidePhonesColorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAGuidePhonesColorsQuery = {
  listAGuidePhonesColors?:  {
    __typename: "ModelAGuidePhonesColorsConnection",
    items:  Array< {
      __typename: "AGuidePhonesColors",
      id: string,
      aGuidePhoneId: string,
      aColorId: string,
      aGuidePhone:  {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aColor:  {
        __typename: "AColor",
        id: string,
        name: string,
        hexCode: string,
        guidePhones?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAGuidePhonesStoragesQueryVariables = {
  id: string,
};

export type GetAGuidePhonesStoragesQuery = {
  getAGuidePhonesStorages?:  {
    __typename: "AGuidePhonesStorages",
    id: string,
    aGuidePhoneId: string,
    aStorageId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aStorage:  {
      __typename: "AStorage",
      id: string,
      numberGB: number,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAGuidePhonesStoragesQueryVariables = {
  filter?: ModelAGuidePhonesStoragesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAGuidePhonesStoragesQuery = {
  listAGuidePhonesStorages?:  {
    __typename: "ModelAGuidePhonesStoragesConnection",
    items:  Array< {
      __typename: "AGuidePhonesStorages",
      id: string,
      aGuidePhoneId: string,
      aStorageId: string,
      aGuidePhone:  {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aStorage:  {
        __typename: "AStorage",
        id: string,
        numberGB: number,
        guidePhones?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type APhonesByBrandIDQueryVariables = {
  brandID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAPhoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type APhonesByBrandIDQuery = {
  aPhonesByBrandID?:  {
    __typename: "ModelAPhoneConnection",
    items:  Array< {
      __typename: "APhone",
      id: string,
      name?: string | null,
      images?: Array< string | null > | null,
      maxPrice?: number | null,
      minPrice?: number | null,
      lastPrice?: number | null,
      suggestedPrice?: number | null,
      reviews?: Array< string | null > | null,
      ratings?: Array< number | null > | null,
      avgRating?: number | null,
      brandID: string,
      brand?:  {
        __typename: "ABrand",
        id: string,
        name?: string | null,
        image?: string | null,
        phones?:  {
          __typename: "ModelAPhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      productTypeID: string,
      productType?:  {
        __typename: "AProductType",
        id: string,
        name?: string | null,
        image?: string | null,
        phones?:  {
          __typename: "ModelAPhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type APhonesByProductTypeIDQueryVariables = {
  productTypeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAPhoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type APhonesByProductTypeIDQuery = {
  aPhonesByProductTypeID?:  {
    __typename: "ModelAPhoneConnection",
    items:  Array< {
      __typename: "APhone",
      id: string,
      name?: string | null,
      images?: Array< string | null > | null,
      maxPrice?: number | null,
      minPrice?: number | null,
      lastPrice?: number | null,
      suggestedPrice?: number | null,
      reviews?: Array< string | null > | null,
      ratings?: Array< number | null > | null,
      avgRating?: number | null,
      brandID: string,
      brand?:  {
        __typename: "ABrand",
        id: string,
        name?: string | null,
        image?: string | null,
        phones?:  {
          __typename: "ModelAPhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      productTypeID: string,
      productType?:  {
        __typename: "AProductType",
        id: string,
        name?: string | null,
        image?: string | null,
        phones?:  {
          __typename: "ModelAPhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ACarriersByCountryIDQueryVariables = {
  countryID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelACarrierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ACarriersByCountryIDQuery = {
  aCarriersByCountryID?:  {
    __typename: "ModelACarrierConnection",
    items:  Array< {
      __typename: "ACarrier",
      id: string,
      name: string,
      image: string,
      countryID: string,
      country?:  {
        __typename: "ACountry",
        id: string,
        name: string,
        officialName?: string | null,
        nativeName?: string | null,
        idd?:  {
          __typename: "Idd",
          root?: string | null,
          suffixes?: Array< string | null > | null,
        } | null,
        googleMaps?: string | null,
        timeZone?: Array< string > | null,
        flag?: string | null,
        postalCode?:  {
          __typename: "PostalCode",
          format?: string | null,
          regex?: string | null,
        } | null,
        carriers?:  {
          __typename: "ModelACarrierConnection",
          nextToken?: string | null,
        } | null,
        languages?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        currencies?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AGuidePhonesByOpSysyemIDQueryVariables = {
  opSysyemID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAGuidePhoneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AGuidePhonesByOpSysyemIDQuery = {
  aGuidePhonesByOpSysyemID?:  {
    __typename: "ModelAGuidePhoneConnection",
    items:  Array< {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ACountriesLanguagesByACountryIdQueryVariables = {
  aCountryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelACountriesLanguagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ACountriesLanguagesByACountryIdQuery = {
  aCountriesLanguagesByACountryId?:  {
    __typename: "ModelACountriesLanguagesConnection",
    items:  Array< {
      __typename: "ACountriesLanguages",
      id: string,
      aCountryId: string,
      aLanguageId: string,
      aCountry:  {
        __typename: "ACountry",
        id: string,
        name: string,
        officialName?: string | null,
        nativeName?: string | null,
        idd?:  {
          __typename: "Idd",
          root?: string | null,
          suffixes?: Array< string | null > | null,
        } | null,
        googleMaps?: string | null,
        timeZone?: Array< string > | null,
        flag?: string | null,
        postalCode?:  {
          __typename: "PostalCode",
          format?: string | null,
          regex?: string | null,
        } | null,
        carriers?:  {
          __typename: "ModelACarrierConnection",
          nextToken?: string | null,
        } | null,
        languages?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        currencies?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aLanguage:  {
        __typename: "ALanguage",
        id: string,
        name: string,
        abbreviation: string,
        countries?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ACountriesLanguagesByALanguageIdQueryVariables = {
  aLanguageId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelACountriesLanguagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ACountriesLanguagesByALanguageIdQuery = {
  aCountriesLanguagesByALanguageId?:  {
    __typename: "ModelACountriesLanguagesConnection",
    items:  Array< {
      __typename: "ACountriesLanguages",
      id: string,
      aCountryId: string,
      aLanguageId: string,
      aCountry:  {
        __typename: "ACountry",
        id: string,
        name: string,
        officialName?: string | null,
        nativeName?: string | null,
        idd?:  {
          __typename: "Idd",
          root?: string | null,
          suffixes?: Array< string | null > | null,
        } | null,
        googleMaps?: string | null,
        timeZone?: Array< string > | null,
        flag?: string | null,
        postalCode?:  {
          __typename: "PostalCode",
          format?: string | null,
          regex?: string | null,
        } | null,
        carriers?:  {
          __typename: "ModelACarrierConnection",
          nextToken?: string | null,
        } | null,
        languages?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        currencies?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aLanguage:  {
        __typename: "ALanguage",
        id: string,
        name: string,
        abbreviation: string,
        countries?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ACountriesCurrenciesByACountryIdQueryVariables = {
  aCountryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelACountriesCurrenciesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ACountriesCurrenciesByACountryIdQuery = {
  aCountriesCurrenciesByACountryId?:  {
    __typename: "ModelACountriesCurrenciesConnection",
    items:  Array< {
      __typename: "ACountriesCurrencies",
      id: string,
      aCountryId: string,
      aCurrencieId: string,
      aCountry:  {
        __typename: "ACountry",
        id: string,
        name: string,
        officialName?: string | null,
        nativeName?: string | null,
        idd?:  {
          __typename: "Idd",
          root?: string | null,
          suffixes?: Array< string | null > | null,
        } | null,
        googleMaps?: string | null,
        timeZone?: Array< string > | null,
        flag?: string | null,
        postalCode?:  {
          __typename: "PostalCode",
          format?: string | null,
          regex?: string | null,
        } | null,
        carriers?:  {
          __typename: "ModelACarrierConnection",
          nextToken?: string | null,
        } | null,
        languages?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        currencies?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aCurrencie:  {
        __typename: "ACurrencie",
        id: string,
        code: string,
        name: string,
        symbol: string,
        countries?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ACountriesCurrenciesByACurrencieIdQueryVariables = {
  aCurrencieId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelACountriesCurrenciesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ACountriesCurrenciesByACurrencieIdQuery = {
  aCountriesCurrenciesByACurrencieId?:  {
    __typename: "ModelACountriesCurrenciesConnection",
    items:  Array< {
      __typename: "ACountriesCurrencies",
      id: string,
      aCountryId: string,
      aCurrencieId: string,
      aCountry:  {
        __typename: "ACountry",
        id: string,
        name: string,
        officialName?: string | null,
        nativeName?: string | null,
        idd?:  {
          __typename: "Idd",
          root?: string | null,
          suffixes?: Array< string | null > | null,
        } | null,
        googleMaps?: string | null,
        timeZone?: Array< string > | null,
        flag?: string | null,
        postalCode?:  {
          __typename: "PostalCode",
          format?: string | null,
          regex?: string | null,
        } | null,
        carriers?:  {
          __typename: "ModelACarrierConnection",
          nextToken?: string | null,
        } | null,
        languages?:  {
          __typename: "ModelACountriesLanguagesConnection",
          nextToken?: string | null,
        } | null,
        currencies?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aCurrencie:  {
        __typename: "ACurrencie",
        id: string,
        code: string,
        name: string,
        symbol: string,
        countries?:  {
          __typename: "ModelACountriesCurrenciesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AGuidePhonesColorsByAGuidePhoneIdQueryVariables = {
  aGuidePhoneId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAGuidePhonesColorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AGuidePhonesColorsByAGuidePhoneIdQuery = {
  aGuidePhonesColorsByAGuidePhoneId?:  {
    __typename: "ModelAGuidePhonesColorsConnection",
    items:  Array< {
      __typename: "AGuidePhonesColors",
      id: string,
      aGuidePhoneId: string,
      aColorId: string,
      aGuidePhone:  {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aColor:  {
        __typename: "AColor",
        id: string,
        name: string,
        hexCode: string,
        guidePhones?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AGuidePhonesColorsByAColorIdQueryVariables = {
  aColorId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAGuidePhonesColorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AGuidePhonesColorsByAColorIdQuery = {
  aGuidePhonesColorsByAColorId?:  {
    __typename: "ModelAGuidePhonesColorsConnection",
    items:  Array< {
      __typename: "AGuidePhonesColors",
      id: string,
      aGuidePhoneId: string,
      aColorId: string,
      aGuidePhone:  {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aColor:  {
        __typename: "AColor",
        id: string,
        name: string,
        hexCode: string,
        guidePhones?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AGuidePhonesStoragesByAGuidePhoneIdQueryVariables = {
  aGuidePhoneId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAGuidePhonesStoragesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AGuidePhonesStoragesByAGuidePhoneIdQuery = {
  aGuidePhonesStoragesByAGuidePhoneId?:  {
    __typename: "ModelAGuidePhonesStoragesConnection",
    items:  Array< {
      __typename: "AGuidePhonesStorages",
      id: string,
      aGuidePhoneId: string,
      aStorageId: string,
      aGuidePhone:  {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aStorage:  {
        __typename: "AStorage",
        id: string,
        numberGB: number,
        guidePhones?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AGuidePhonesStoragesByAStorageIdQueryVariables = {
  aStorageId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAGuidePhonesStoragesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AGuidePhonesStoragesByAStorageIdQuery = {
  aGuidePhonesStoragesByAStorageId?:  {
    __typename: "ModelAGuidePhonesStoragesConnection",
    items:  Array< {
      __typename: "AGuidePhonesStorages",
      id: string,
      aGuidePhoneId: string,
      aStorageId: string,
      aGuidePhone:  {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      aStorage:  {
        __typename: "AStorage",
        id: string,
        numberGB: number,
        guidePhones?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blog?:  {
          __typename: "Blog",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blog?:  {
          __typename: "Blog",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blog?:  {
          __typename: "Blog",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        blogPostsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        items:  Array< {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          createdAt: string,
          updatedAt: string,
          blogPostsId?: string | null,
        } | null,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          postCommentsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          postCommentsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        posts?:  {
          __typename: "ModelPostConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items:  Array< {
          __typename: "Comment",
          id: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          postCommentsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnCreateAImageCarouselSubscriptionVariables = {
  filter?: ModelSubscriptionAImageCarouselFilterInput | null,
};

export type OnCreateAImageCarouselSubscription = {
  onCreateAImageCarousel?:  {
    __typename: "AImageCarousel",
    id: string,
    image: string,
    description?: string | null,
    route?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAImageCarouselSubscriptionVariables = {
  filter?: ModelSubscriptionAImageCarouselFilterInput | null,
};

export type OnUpdateAImageCarouselSubscription = {
  onUpdateAImageCarousel?:  {
    __typename: "AImageCarousel",
    id: string,
    image: string,
    description?: string | null,
    route?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAImageCarouselSubscriptionVariables = {
  filter?: ModelSubscriptionAImageCarouselFilterInput | null,
};

export type OnDeleteAImageCarouselSubscription = {
  onDeleteAImageCarousel?:  {
    __typename: "AImageCarousel",
    id: string,
    image: string,
    description?: string | null,
    route?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateABrandSubscriptionVariables = {
  filter?: ModelSubscriptionABrandFilterInput | null,
};

export type OnCreateABrandSubscription = {
  onCreateABrand?:  {
    __typename: "ABrand",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateABrandSubscriptionVariables = {
  filter?: ModelSubscriptionABrandFilterInput | null,
};

export type OnUpdateABrandSubscription = {
  onUpdateABrand?:  {
    __typename: "ABrand",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteABrandSubscriptionVariables = {
  filter?: ModelSubscriptionABrandFilterInput | null,
};

export type OnDeleteABrandSubscription = {
  onDeleteABrand?:  {
    __typename: "ABrand",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAProductTypeSubscriptionVariables = {
  filter?: ModelSubscriptionAProductTypeFilterInput | null,
};

export type OnCreateAProductTypeSubscription = {
  onCreateAProductType?:  {
    __typename: "AProductType",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAProductTypeSubscriptionVariables = {
  filter?: ModelSubscriptionAProductTypeFilterInput | null,
};

export type OnUpdateAProductTypeSubscription = {
  onUpdateAProductType?:  {
    __typename: "AProductType",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAProductTypeSubscriptionVariables = {
  filter?: ModelSubscriptionAProductTypeFilterInput | null,
};

export type OnDeleteAProductTypeSubscription = {
  onDeleteAProductType?:  {
    __typename: "AProductType",
    id: string,
    name?: string | null,
    image?: string | null,
    phones?:  {
      __typename: "ModelAPhoneConnection",
      items:  Array< {
        __typename: "APhone",
        id: string,
        name?: string | null,
        images?: Array< string | null > | null,
        maxPrice?: number | null,
        minPrice?: number | null,
        lastPrice?: number | null,
        suggestedPrice?: number | null,
        reviews?: Array< string | null > | null,
        ratings?: Array< number | null > | null,
        avgRating?: number | null,
        brandID: string,
        brand?:  {
          __typename: "ABrand",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        productTypeID: string,
        productType?:  {
          __typename: "AProductType",
          id: string,
          name?: string | null,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAPhoneSubscriptionVariables = {
  filter?: ModelSubscriptionAPhoneFilterInput | null,
};

export type OnCreateAPhoneSubscription = {
  onCreateAPhone?:  {
    __typename: "APhone",
    id: string,
    name?: string | null,
    images?: Array< string | null > | null,
    maxPrice?: number | null,
    minPrice?: number | null,
    lastPrice?: number | null,
    suggestedPrice?: number | null,
    reviews?: Array< string | null > | null,
    ratings?: Array< number | null > | null,
    avgRating?: number | null,
    brandID: string,
    brand?:  {
      __typename: "ABrand",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productTypeID: string,
    productType?:  {
      __typename: "AProductType",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAPhoneSubscriptionVariables = {
  filter?: ModelSubscriptionAPhoneFilterInput | null,
};

export type OnUpdateAPhoneSubscription = {
  onUpdateAPhone?:  {
    __typename: "APhone",
    id: string,
    name?: string | null,
    images?: Array< string | null > | null,
    maxPrice?: number | null,
    minPrice?: number | null,
    lastPrice?: number | null,
    suggestedPrice?: number | null,
    reviews?: Array< string | null > | null,
    ratings?: Array< number | null > | null,
    avgRating?: number | null,
    brandID: string,
    brand?:  {
      __typename: "ABrand",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productTypeID: string,
    productType?:  {
      __typename: "AProductType",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAPhoneSubscriptionVariables = {
  filter?: ModelSubscriptionAPhoneFilterInput | null,
};

export type OnDeleteAPhoneSubscription = {
  onDeleteAPhone?:  {
    __typename: "APhone",
    id: string,
    name?: string | null,
    images?: Array< string | null > | null,
    maxPrice?: number | null,
    minPrice?: number | null,
    lastPrice?: number | null,
    suggestedPrice?: number | null,
    reviews?: Array< string | null > | null,
    ratings?: Array< number | null > | null,
    avgRating?: number | null,
    brandID: string,
    brand?:  {
      __typename: "ABrand",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productTypeID: string,
    productType?:  {
      __typename: "AProductType",
      id: string,
      name?: string | null,
      image?: string | null,
      phones?:  {
        __typename: "ModelAPhoneConnection",
        items:  Array< {
          __typename: "APhone",
          id: string,
          name?: string | null,
          images?: Array< string | null > | null,
          maxPrice?: number | null,
          minPrice?: number | null,
          lastPrice?: number | null,
          suggestedPrice?: number | null,
          reviews?: Array< string | null > | null,
          ratings?: Array< number | null > | null,
          avgRating?: number | null,
          brandID: string,
          productTypeID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateACarrierSubscriptionVariables = {
  filter?: ModelSubscriptionACarrierFilterInput | null,
};

export type OnCreateACarrierSubscription = {
  onCreateACarrier?:  {
    __typename: "ACarrier",
    id: string,
    name: string,
    image: string,
    countryID: string,
    country?:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateACarrierSubscriptionVariables = {
  filter?: ModelSubscriptionACarrierFilterInput | null,
};

export type OnUpdateACarrierSubscription = {
  onUpdateACarrier?:  {
    __typename: "ACarrier",
    id: string,
    name: string,
    image: string,
    countryID: string,
    country?:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteACarrierSubscriptionVariables = {
  filter?: ModelSubscriptionACarrierFilterInput | null,
};

export type OnDeleteACarrierSubscription = {
  onDeleteACarrier?:  {
    __typename: "ACarrier",
    id: string,
    name: string,
    image: string,
    countryID: string,
    country?:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateACountrySubscriptionVariables = {
  filter?: ModelSubscriptionACountryFilterInput | null,
};

export type OnCreateACountrySubscription = {
  onCreateACountry?:  {
    __typename: "ACountry",
    id: string,
    name: string,
    officialName?: string | null,
    nativeName?: string | null,
    idd?:  {
      __typename: "Idd",
      root?: string | null,
      suffixes?: Array< string | null > | null,
    } | null,
    googleMaps?: string | null,
    timeZone?: Array< string > | null,
    flag?: string | null,
    postalCode?:  {
      __typename: "PostalCode",
      format?: string | null,
      regex?: string | null,
    } | null,
    carriers?:  {
      __typename: "ModelACarrierConnection",
      items:  Array< {
        __typename: "ACarrier",
        id: string,
        name: string,
        image: string,
        countryID: string,
        country?:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    languages?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    currencies?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateACountrySubscriptionVariables = {
  filter?: ModelSubscriptionACountryFilterInput | null,
};

export type OnUpdateACountrySubscription = {
  onUpdateACountry?:  {
    __typename: "ACountry",
    id: string,
    name: string,
    officialName?: string | null,
    nativeName?: string | null,
    idd?:  {
      __typename: "Idd",
      root?: string | null,
      suffixes?: Array< string | null > | null,
    } | null,
    googleMaps?: string | null,
    timeZone?: Array< string > | null,
    flag?: string | null,
    postalCode?:  {
      __typename: "PostalCode",
      format?: string | null,
      regex?: string | null,
    } | null,
    carriers?:  {
      __typename: "ModelACarrierConnection",
      items:  Array< {
        __typename: "ACarrier",
        id: string,
        name: string,
        image: string,
        countryID: string,
        country?:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    languages?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    currencies?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteACountrySubscriptionVariables = {
  filter?: ModelSubscriptionACountryFilterInput | null,
};

export type OnDeleteACountrySubscription = {
  onDeleteACountry?:  {
    __typename: "ACountry",
    id: string,
    name: string,
    officialName?: string | null,
    nativeName?: string | null,
    idd?:  {
      __typename: "Idd",
      root?: string | null,
      suffixes?: Array< string | null > | null,
    } | null,
    googleMaps?: string | null,
    timeZone?: Array< string > | null,
    flag?: string | null,
    postalCode?:  {
      __typename: "PostalCode",
      format?: string | null,
      regex?: string | null,
    } | null,
    carriers?:  {
      __typename: "ModelACarrierConnection",
      items:  Array< {
        __typename: "ACarrier",
        id: string,
        name: string,
        image: string,
        countryID: string,
        country?:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    languages?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    currencies?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateALanguageSubscriptionVariables = {
  filter?: ModelSubscriptionALanguageFilterInput | null,
};

export type OnCreateALanguageSubscription = {
  onCreateALanguage?:  {
    __typename: "ALanguage",
    id: string,
    name: string,
    abbreviation: string,
    countries?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateALanguageSubscriptionVariables = {
  filter?: ModelSubscriptionALanguageFilterInput | null,
};

export type OnUpdateALanguageSubscription = {
  onUpdateALanguage?:  {
    __typename: "ALanguage",
    id: string,
    name: string,
    abbreviation: string,
    countries?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteALanguageSubscriptionVariables = {
  filter?: ModelSubscriptionALanguageFilterInput | null,
};

export type OnDeleteALanguageSubscription = {
  onDeleteALanguage?:  {
    __typename: "ALanguage",
    id: string,
    name: string,
    abbreviation: string,
    countries?:  {
      __typename: "ModelACountriesLanguagesConnection",
      items:  Array< {
        __typename: "ACountriesLanguages",
        id: string,
        aCountryId: string,
        aLanguageId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aLanguage:  {
          __typename: "ALanguage",
          id: string,
          name: string,
          abbreviation: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateACurrencieSubscriptionVariables = {
  filter?: ModelSubscriptionACurrencieFilterInput | null,
};

export type OnCreateACurrencieSubscription = {
  onCreateACurrencie?:  {
    __typename: "ACurrencie",
    id: string,
    code: string,
    name: string,
    symbol: string,
    countries?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateACurrencieSubscriptionVariables = {
  filter?: ModelSubscriptionACurrencieFilterInput | null,
};

export type OnUpdateACurrencieSubscription = {
  onUpdateACurrencie?:  {
    __typename: "ACurrencie",
    id: string,
    code: string,
    name: string,
    symbol: string,
    countries?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteACurrencieSubscriptionVariables = {
  filter?: ModelSubscriptionACurrencieFilterInput | null,
};

export type OnDeleteACurrencieSubscription = {
  onDeleteACurrencie?:  {
    __typename: "ACurrencie",
    id: string,
    code: string,
    name: string,
    symbol: string,
    countries?:  {
      __typename: "ModelACountriesCurrenciesConnection",
      items:  Array< {
        __typename: "ACountriesCurrencies",
        id: string,
        aCountryId: string,
        aCurrencieId: string,
        aCountry:  {
          __typename: "ACountry",
          id: string,
          name: string,
          officialName?: string | null,
          nativeName?: string | null,
          googleMaps?: string | null,
          timeZone?: Array< string > | null,
          flag?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aCurrencie:  {
          __typename: "ACurrencie",
          id: string,
          code: string,
          name: string,
          symbol: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAGuidePhoneSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhoneFilterInput | null,
};

export type OnCreateAGuidePhoneSubscription = {
  onCreateAGuidePhone?:  {
    __typename: "AGuidePhone",
    id: string,
    description?: string | null,
    width?: number | null,
    height?: number | null,
    depth?: number | null,
    weight?: number | null,
    display?:  {
      __typename: "Display",
      resolution?: string | null,
      screenSize?: string | null,
      ppi?: string | null,
    } | null,
    camera?:  {
      __typename: "Camera",
      primary?: number | null,
      secondary?: number | null,
      resolution?: string | null,
    } | null,
    battery?:  {
      __typename: "Battery",
      capacity?: number | null,
      duration?: number | null,
      usb?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    storages?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    opSysyemID?: string | null,
    opSystem?:  {
      __typename: "AOpSystem",
      id: string,
      name: string,
      image?: string | null,
      guidePhones?:  {
        __typename: "ModelAGuidePhoneConnection",
        items:  Array< {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAGuidePhoneSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhoneFilterInput | null,
};

export type OnUpdateAGuidePhoneSubscription = {
  onUpdateAGuidePhone?:  {
    __typename: "AGuidePhone",
    id: string,
    description?: string | null,
    width?: number | null,
    height?: number | null,
    depth?: number | null,
    weight?: number | null,
    display?:  {
      __typename: "Display",
      resolution?: string | null,
      screenSize?: string | null,
      ppi?: string | null,
    } | null,
    camera?:  {
      __typename: "Camera",
      primary?: number | null,
      secondary?: number | null,
      resolution?: string | null,
    } | null,
    battery?:  {
      __typename: "Battery",
      capacity?: number | null,
      duration?: number | null,
      usb?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    storages?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    opSysyemID?: string | null,
    opSystem?:  {
      __typename: "AOpSystem",
      id: string,
      name: string,
      image?: string | null,
      guidePhones?:  {
        __typename: "ModelAGuidePhoneConnection",
        items:  Array< {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAGuidePhoneSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhoneFilterInput | null,
};

export type OnDeleteAGuidePhoneSubscription = {
  onDeleteAGuidePhone?:  {
    __typename: "AGuidePhone",
    id: string,
    description?: string | null,
    width?: number | null,
    height?: number | null,
    depth?: number | null,
    weight?: number | null,
    display?:  {
      __typename: "Display",
      resolution?: string | null,
      screenSize?: string | null,
      ppi?: string | null,
    } | null,
    camera?:  {
      __typename: "Camera",
      primary?: number | null,
      secondary?: number | null,
      resolution?: string | null,
    } | null,
    battery?:  {
      __typename: "Battery",
      capacity?: number | null,
      duration?: number | null,
      usb?: string | null,
    } | null,
    colors?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    storages?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    opSysyemID?: string | null,
    opSystem?:  {
      __typename: "AOpSystem",
      id: string,
      name: string,
      image?: string | null,
      guidePhones?:  {
        __typename: "ModelAGuidePhoneConnection",
        items:  Array< {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAColorSubscriptionVariables = {
  filter?: ModelSubscriptionAColorFilterInput | null,
};

export type OnCreateAColorSubscription = {
  onCreateAColor?:  {
    __typename: "AColor",
    id: string,
    name: string,
    hexCode: string,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAColorSubscriptionVariables = {
  filter?: ModelSubscriptionAColorFilterInput | null,
};

export type OnUpdateAColorSubscription = {
  onUpdateAColor?:  {
    __typename: "AColor",
    id: string,
    name: string,
    hexCode: string,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAColorSubscriptionVariables = {
  filter?: ModelSubscriptionAColorFilterInput | null,
};

export type OnDeleteAColorSubscription = {
  onDeleteAColor?:  {
    __typename: "AColor",
    id: string,
    name: string,
    hexCode: string,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesColorsConnection",
      items:  Array< {
        __typename: "AGuidePhonesColors",
        id: string,
        aGuidePhoneId: string,
        aColorId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aColor:  {
          __typename: "AColor",
          id: string,
          name: string,
          hexCode: string,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAStorageSubscriptionVariables = {
  filter?: ModelSubscriptionAStorageFilterInput | null,
};

export type OnCreateAStorageSubscription = {
  onCreateAStorage?:  {
    __typename: "AStorage",
    id: string,
    numberGB: number,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAStorageSubscriptionVariables = {
  filter?: ModelSubscriptionAStorageFilterInput | null,
};

export type OnUpdateAStorageSubscription = {
  onUpdateAStorage?:  {
    __typename: "AStorage",
    id: string,
    numberGB: number,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAStorageSubscriptionVariables = {
  filter?: ModelSubscriptionAStorageFilterInput | null,
};

export type OnDeleteAStorageSubscription = {
  onDeleteAStorage?:  {
    __typename: "AStorage",
    id: string,
    numberGB: number,
    guidePhones?:  {
      __typename: "ModelAGuidePhonesStoragesConnection",
      items:  Array< {
        __typename: "AGuidePhonesStorages",
        id: string,
        aGuidePhoneId: string,
        aStorageId: string,
        aGuidePhone:  {
          __typename: "AGuidePhone",
          id: string,
          description?: string | null,
          width?: number | null,
          height?: number | null,
          depth?: number | null,
          weight?: number | null,
          opSysyemID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        aStorage:  {
          __typename: "AStorage",
          id: string,
          numberGB: number,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAOpSystemSubscriptionVariables = {
  filter?: ModelSubscriptionAOpSystemFilterInput | null,
};

export type OnCreateAOpSystemSubscription = {
  onCreateAOpSystem?:  {
    __typename: "AOpSystem",
    id: string,
    name: string,
    image?: string | null,
    guidePhones?:  {
      __typename: "ModelAGuidePhoneConnection",
      items:  Array< {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAOpSystemSubscriptionVariables = {
  filter?: ModelSubscriptionAOpSystemFilterInput | null,
};

export type OnUpdateAOpSystemSubscription = {
  onUpdateAOpSystem?:  {
    __typename: "AOpSystem",
    id: string,
    name: string,
    image?: string | null,
    guidePhones?:  {
      __typename: "ModelAGuidePhoneConnection",
      items:  Array< {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAOpSystemSubscriptionVariables = {
  filter?: ModelSubscriptionAOpSystemFilterInput | null,
};

export type OnDeleteAOpSystemSubscription = {
  onDeleteAOpSystem?:  {
    __typename: "AOpSystem",
    id: string,
    name: string,
    image?: string | null,
    guidePhones?:  {
      __typename: "ModelAGuidePhoneConnection",
      items:  Array< {
        __typename: "AGuidePhone",
        id: string,
        description?: string | null,
        width?: number | null,
        height?: number | null,
        depth?: number | null,
        weight?: number | null,
        display?:  {
          __typename: "Display",
          resolution?: string | null,
          screenSize?: string | null,
          ppi?: string | null,
        } | null,
        camera?:  {
          __typename: "Camera",
          primary?: number | null,
          secondary?: number | null,
          resolution?: string | null,
        } | null,
        battery?:  {
          __typename: "Battery",
          capacity?: number | null,
          duration?: number | null,
          usb?: string | null,
        } | null,
        colors?:  {
          __typename: "ModelAGuidePhonesColorsConnection",
          nextToken?: string | null,
        } | null,
        storages?:  {
          __typename: "ModelAGuidePhonesStoragesConnection",
          nextToken?: string | null,
        } | null,
        opSysyemID?: string | null,
        opSystem?:  {
          __typename: "AOpSystem",
          id: string,
          name: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateACountriesLanguagesSubscriptionVariables = {
  filter?: ModelSubscriptionACountriesLanguagesFilterInput | null,
};

export type OnCreateACountriesLanguagesSubscription = {
  onCreateACountriesLanguages?:  {
    __typename: "ACountriesLanguages",
    id: string,
    aCountryId: string,
    aLanguageId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aLanguage:  {
      __typename: "ALanguage",
      id: string,
      name: string,
      abbreviation: string,
      countries?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateACountriesLanguagesSubscriptionVariables = {
  filter?: ModelSubscriptionACountriesLanguagesFilterInput | null,
};

export type OnUpdateACountriesLanguagesSubscription = {
  onUpdateACountriesLanguages?:  {
    __typename: "ACountriesLanguages",
    id: string,
    aCountryId: string,
    aLanguageId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aLanguage:  {
      __typename: "ALanguage",
      id: string,
      name: string,
      abbreviation: string,
      countries?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteACountriesLanguagesSubscriptionVariables = {
  filter?: ModelSubscriptionACountriesLanguagesFilterInput | null,
};

export type OnDeleteACountriesLanguagesSubscription = {
  onDeleteACountriesLanguages?:  {
    __typename: "ACountriesLanguages",
    id: string,
    aCountryId: string,
    aLanguageId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aLanguage:  {
      __typename: "ALanguage",
      id: string,
      name: string,
      abbreviation: string,
      countries?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateACountriesCurrenciesSubscriptionVariables = {
  filter?: ModelSubscriptionACountriesCurrenciesFilterInput | null,
};

export type OnCreateACountriesCurrenciesSubscription = {
  onCreateACountriesCurrencies?:  {
    __typename: "ACountriesCurrencies",
    id: string,
    aCountryId: string,
    aCurrencieId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aCurrencie:  {
      __typename: "ACurrencie",
      id: string,
      code: string,
      name: string,
      symbol: string,
      countries?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateACountriesCurrenciesSubscriptionVariables = {
  filter?: ModelSubscriptionACountriesCurrenciesFilterInput | null,
};

export type OnUpdateACountriesCurrenciesSubscription = {
  onUpdateACountriesCurrencies?:  {
    __typename: "ACountriesCurrencies",
    id: string,
    aCountryId: string,
    aCurrencieId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aCurrencie:  {
      __typename: "ACurrencie",
      id: string,
      code: string,
      name: string,
      symbol: string,
      countries?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteACountriesCurrenciesSubscriptionVariables = {
  filter?: ModelSubscriptionACountriesCurrenciesFilterInput | null,
};

export type OnDeleteACountriesCurrenciesSubscription = {
  onDeleteACountriesCurrencies?:  {
    __typename: "ACountriesCurrencies",
    id: string,
    aCountryId: string,
    aCurrencieId: string,
    aCountry:  {
      __typename: "ACountry",
      id: string,
      name: string,
      officialName?: string | null,
      nativeName?: string | null,
      idd?:  {
        __typename: "Idd",
        root?: string | null,
        suffixes?: Array< string | null > | null,
      } | null,
      googleMaps?: string | null,
      timeZone?: Array< string > | null,
      flag?: string | null,
      postalCode?:  {
        __typename: "PostalCode",
        format?: string | null,
        regex?: string | null,
      } | null,
      carriers?:  {
        __typename: "ModelACarrierConnection",
        items:  Array< {
          __typename: "ACarrier",
          id: string,
          name: string,
          image: string,
          countryID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      languages?:  {
        __typename: "ModelACountriesLanguagesConnection",
        items:  Array< {
          __typename: "ACountriesLanguages",
          id: string,
          aCountryId: string,
          aLanguageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      currencies?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aCurrencie:  {
      __typename: "ACurrencie",
      id: string,
      code: string,
      name: string,
      symbol: string,
      countries?:  {
        __typename: "ModelACountriesCurrenciesConnection",
        items:  Array< {
          __typename: "ACountriesCurrencies",
          id: string,
          aCountryId: string,
          aCurrencieId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAGuidePhonesColorsSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhonesColorsFilterInput | null,
};

export type OnCreateAGuidePhonesColorsSubscription = {
  onCreateAGuidePhonesColors?:  {
    __typename: "AGuidePhonesColors",
    id: string,
    aGuidePhoneId: string,
    aColorId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aColor:  {
      __typename: "AColor",
      id: string,
      name: string,
      hexCode: string,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAGuidePhonesColorsSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhonesColorsFilterInput | null,
};

export type OnUpdateAGuidePhonesColorsSubscription = {
  onUpdateAGuidePhonesColors?:  {
    __typename: "AGuidePhonesColors",
    id: string,
    aGuidePhoneId: string,
    aColorId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aColor:  {
      __typename: "AColor",
      id: string,
      name: string,
      hexCode: string,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAGuidePhonesColorsSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhonesColorsFilterInput | null,
};

export type OnDeleteAGuidePhonesColorsSubscription = {
  onDeleteAGuidePhonesColors?:  {
    __typename: "AGuidePhonesColors",
    id: string,
    aGuidePhoneId: string,
    aColorId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aColor:  {
      __typename: "AColor",
      id: string,
      name: string,
      hexCode: string,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAGuidePhonesStoragesSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhonesStoragesFilterInput | null,
};

export type OnCreateAGuidePhonesStoragesSubscription = {
  onCreateAGuidePhonesStorages?:  {
    __typename: "AGuidePhonesStorages",
    id: string,
    aGuidePhoneId: string,
    aStorageId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aStorage:  {
      __typename: "AStorage",
      id: string,
      numberGB: number,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAGuidePhonesStoragesSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhonesStoragesFilterInput | null,
};

export type OnUpdateAGuidePhonesStoragesSubscription = {
  onUpdateAGuidePhonesStorages?:  {
    __typename: "AGuidePhonesStorages",
    id: string,
    aGuidePhoneId: string,
    aStorageId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aStorage:  {
      __typename: "AStorage",
      id: string,
      numberGB: number,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAGuidePhonesStoragesSubscriptionVariables = {
  filter?: ModelSubscriptionAGuidePhonesStoragesFilterInput | null,
};

export type OnDeleteAGuidePhonesStoragesSubscription = {
  onDeleteAGuidePhonesStorages?:  {
    __typename: "AGuidePhonesStorages",
    id: string,
    aGuidePhoneId: string,
    aStorageId: string,
    aGuidePhone:  {
      __typename: "AGuidePhone",
      id: string,
      description?: string | null,
      width?: number | null,
      height?: number | null,
      depth?: number | null,
      weight?: number | null,
      display?:  {
        __typename: "Display",
        resolution?: string | null,
        screenSize?: string | null,
        ppi?: string | null,
      } | null,
      camera?:  {
        __typename: "Camera",
        primary?: number | null,
        secondary?: number | null,
        resolution?: string | null,
      } | null,
      battery?:  {
        __typename: "Battery",
        capacity?: number | null,
        duration?: number | null,
        usb?: string | null,
      } | null,
      colors?:  {
        __typename: "ModelAGuidePhonesColorsConnection",
        items:  Array< {
          __typename: "AGuidePhonesColors",
          id: string,
          aGuidePhoneId: string,
          aColorId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      storages?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      opSysyemID?: string | null,
      opSystem?:  {
        __typename: "AOpSystem",
        id: string,
        name: string,
        image?: string | null,
        guidePhones?:  {
          __typename: "ModelAGuidePhoneConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aStorage:  {
      __typename: "AStorage",
      id: string,
      numberGB: number,
      guidePhones?:  {
        __typename: "ModelAGuidePhonesStoragesConnection",
        items:  Array< {
          __typename: "AGuidePhonesStorages",
          id: string,
          aGuidePhoneId: string,
          aStorageId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
