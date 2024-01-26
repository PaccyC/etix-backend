import GeoJSON, { LineString, MultiLineString, Point, Polygon } from "geojson";

export = tt;
export as namespace tt;

declare namespace tt {
  /**
   * Returns SDK details (e.g., version).
   */
  function sdkInfo(): Object;

  /**
   * This method sets the content of the TomTom-User-Agent header. We are collecting anonymous data for
   * statistics of usage of our services in order to increase the quality of our products.
   * @param productId Identifier (e.g., a name) of your application e.g. MyApplication
   * @param productVersion Version of your application e.g. 1.0.2
   */
  function setProductInfo(productId: string, productVersion: string): void;

  /**
   * An object, which contains all supported services.
   */
  const services: Services;

  interface Services {
    /**
     * Retrieve polygons (in GeoJSON format) representing administrative borders using IDs related to search results entities.
     * Parameters need to be passed to the constructor.
     */
    additionalData: AdditionalDataServiceFactory;

    /**
     * Makes a search request using the TomTom Search API - Along Route Search.
     * The Search Along Route endpoint allows you to perform a fuzzy search for POIs along a specified route. This search is constrained by specifying the Detour Time limiting measure.
     * To send the route points, this service will use a POST request with the route encoded as a JSON payload. The minimum number of route points is 2.
     * Parameters need to be passed to the constructor.
     */
    alongRouteSearch: AlongRouteSearchServiceFactory;

    /**
     * The Autocomplete API enables you to make a more meaningful Search API call by recognizing entities inside an input query and offering them as query terms.
     * Makes a search request using the TomTom Search API - Autocomplete.
     */
    autocomplete: AutocompleteServiceFactory;

    /**
     * Calculates a route between two locations using the TomTom Routing API;
     * Parameters need to be passed to the constructor.
     */
    calculateRoute: CalculateRouteServiceFactory;

    /**
     * Calculate a reachable range implementation using the TomTom Reachable Range API.
     * Makes a route request using the TomTom Routing API - Calculate Reachable Range.
     * Parameters need to be passed to the constructor.
     * The Calculate Reachable Range service calculates a set of locations that can be reached from the origin point, subject to the available fuel or energy budget that is specified in the request.
     * The information returned is a polygon boundary in counterclockwise orientation and the precise polygon center (the result of map-matching the origin point).
     */
    calculateReachableRange: CalculateReachableRangeServiceFactory;

    /**
     * Makes a search request using the TomTom Search API - Category Search.
     * Parameters need to be be passed to the constructor.
     * The list of all supported category codes are available at https://developer.tomtom.com/search-api/search-api-documentation/supported-category-codes.
     */
    categorySearch: CategorySearchServiceFactory;

    /**
     * The Copyrights service implementation provides a full copyrights notice in a HTML format that can be displayed to the user when the copyrights link is clicked.
     * The response from the service is a HTML string with the copyrights information that have to be displayed. The whole respose is wrapped into a div element with the id copyrightMessage.
     */
    copyrightsV2: CopyrightsV2ServiceFactory;

    /**
     * The copyright caption service implementation provides a caption that is supposed to be displayed on a link that provides the full copyright notice. The response is not changed often.
     * This service is supposed to be called once when user has the map displayed for the first time.
     * Parameters need to be passed to the constructor.
     * The final response from the service is a string containing the caption i.e., © 1992 - 2021 TomTom.
     * This text has to be displayed as a copyrights prompt when using TomTom services. The caption should be clickable. A user should be presented with the full copyrights notice when the caption is clicked. For further documentation please check the caption class.
     */
    copyrightsCaptionV2: CopyrightsCaptionV2ServiceFactory;

    /**
     * It converts geographical coordinates into a textual address representation using the TomTom Search API - CrossStreet lookup.
     * Parameters need to be passed to the constructor.
     */
    crossStreetLookup: CrossStreetLookupServiceFactory;

    /**
     * Makes a search request using the TomTom Search API - Fuzzy Search.
     * Parameters need to be be passed to the constructor.
     * The list of all supported category codes are available at https://developer.tomtom.com/search-api/search-api-documentation/supported-category-codes.
     */
    fuzzySearch: FuzzySearchServiceFactory;

    /**
     * Makes a search request using the TomTom Search API - Fuzzy Search.
     * Parameters need to be be passed to the constructor.
     * The list of all supported category codes are available here.
     */
    geocode: GeocodeServiceFactory;

    /**
     * Makes a search request using the TomTom Search API - Geometry Search.
     * Parameters need to be be passed to the constructor.
     */
    geometrySearch: GeometrySearchServiceFactory;

    /**
     * Provides detailed information about traffic incidents in the requested area using the
     * TomTom Traffic API - Traffic Incidents Details.
     * This is a new version of the incidentDetails method with simpler options and a more readable response object.
     * The current road situation is updated every minute.
     */
    incidentDetailsV5: IncidentDetailsV5ServiceFactory;

    /**
     * Provides the current traffic model ID which is the traffic model number for the viewport needed for the Traffic API - Incidents Layer, and the IncidentDetails calls.
     * It is updated every minute, and is valid for two minutes before it times out.
     * Parameters need to be passed to the constructor.
     */
    incidentViewport: IncidentViewportServiceFactory;

    /**
     * Matrix Routing service implementation using using the TomTom Routing API - Matrix Routing.
     * The Routing API Matrix Routing service allows the calculation of a matrix of route summaries for a set of routes which are defined with origin and destination locations.
     * For every given origin this service calculates the cost of routing from that origin to every given destination. The set of origins and the set of destinations can be thought of as the column and row headers of a table, and each cell in the table contains the costs of routing from the origin to the destination for that cell.
     * The following costs are computed for each route:
     *     Travel times
     *     Distances
     * Parameters need to be passed to the constructor.
     * If you want to explicitly decide which batch mode you want to use, add a property 'batchMode' with its value set to one of the properties: sync, async, or redirect.
     * @deprecated
     * This service has been deprecated.
     */
    matrixRouting: MatrixRoutingServiceFactory;

    /**
     * Makes a search request using the TomTom Search API - Nearby Search.
     * Parameters need to be be passed to the constructor.
     */
    nearbySearch: NearbySearchServiceFactory;

    /**
     * Makes a placeById request using {@link https://developer.tomtom.com/search-api/search-api-documentation/place-id|Place by Id API.}
     * The Place by Id service endpoint provides detailed information about the Place found by its identifier (entityId).
     * Currently, Place by Id only supports POI (Points of Interest) ids.
     */
    placeById: PlaceByIdServiceFactory;

    /**
     * Makes a search request using the TomTom Search API - Points of Interest Search.
     * Parameters need to be be passed to the constructor.
     */
    poiSearch: PoiSearchServiceFactory;

    /**
     * Reverse geocode service implementation.
     * It converts geographical coordinates into a textual address representation using the TomTom Search API - Reverse Geocode.
     * Parameters need to be passed to the constructor.
     */
    reverseGeocode: ReverseGeocodeServiceFactory;

    /**
     * This service makes it easy to generate a URL string to request a static map image using the TomTom Maps API - Static Image.
     * Parameters need to be passed to the method, which generates the URL string.
     */
    staticImage: StaticImageServiceFactory;

    /**
     * Makes a request using the TomTom Search API - Structured Geocode.
     * Parameters can be passed to the constructor or provided via convenient methods that can be chained until the method performs the call.
     * The call is asynchronous, therefore the user has two options to receive the response:
     *     Passing a callback function.
     *     Use the Promise returned by the method to handle the response.
     */
    structuredGeocode: StructuredGeocodeServiceFactory;

    /**
     * The Flow Segment Data service provides information about the speeds and travel times of the road fragment closest to the given coordinates.
     */
    trafficFlowSegmentData: TrafficFlowSegmentDataServiceFactory;

    /**
     * The POI Categories service provides a full list of POI (Points of Interest) categories and subcategories together with their translations and synonyms. Search API - POI Categories.
     * Parameters need to be be passed to the constructor.
     */
    poiCategories: PoiCategoriesServiceFactory;

    /**
     * Get the charging connector data consisting of type and numbers of the existing charging stations, based on EV station ID retrieved from a FuzzySearch request called with connectorSet parameter.
     * Parameters need to be passed to the constructor.
     */
    evChargingStationsAvailability: EvChargingStationsAvailabilityServiceFactory;

    /**
     * The Long Distance EV Routing service calculates a route between a given origin and destination. The route contains charging stops
     * that have been added automatically based on the vehicle's consumption and charging model.
     */
    longDistanceEVRouting: LongDistanceEvRoutingFactory;
  }

  type CategorySearchServiceFactory = BatchServiceFactory<
    CategorySearchOptions,
    CategorySearchResponse
  >;
  type FuzzySearchServiceFactory = BatchServiceFactory<
    FuzzySearchOptions,
    FuzzySearchResponse
  >;
  type GeometrySearchServiceFactory = BatchServiceFactory<
    GeometrySearchOptions,
    GeometrySearchResponse
  >;
  type NearbySearchServiceFactory = BatchServiceFactory<
    NearbySearchOptions,
    NearbySearchResponse
  >;
  type PlaceByIdServiceFactory = ServiceFactory<
    PlaceByIdOptions,
    PlaceByIdResponse
  >;
  type PoiSearchServiceFactory = BatchServiceFactory<
    PoiSearchOptions,
    PoiSearchResponse
  >;
  type AlongRouteSearchServiceFactory = BatchServiceFactory<
    AlongRouteSearchOptions,
    AlongRouteSearchResponse
  >;
  type CalculateRouteServiceFactory = BatchServiceFactory<
    CalculateRouteOptions,
    CalculateRouteResponse
  >;
  type LongDistanceEvRoutingFactory = ServiceFactory<
    LongDistanceEvRoutingOptions,
    LongDistanceEvRoutingResponse
  >;
  type AdditionalDataServiceFactory = ServiceFactory<AdditionalDataOptions>;
  type AutocompleteServiceFactory = ServiceFactory<AutocompleteOptions>;
  type CalculateReachableRangeServiceFactory = ServiceFactory<
    CalculateReachableRangeOptions,
    CalculateReachableRangeResponse
  >;
  type CopyrightsV2ServiceFactory = ServiceFactory<
    CopyrightsV2Options,
    CopyrightsV2Response
  >;

  type CopyrightsCaptionV2ServiceFactory = ServiceFactory<
    CopyrightsCaptionV2Options,
    CopyrightsCaptionV2Response
  >;
  type CrossStreetLookupServiceFactory = BatchServiceFactory<
    CrossStreetLookupOptions
  >;
  type GeocodeServiceFactory = BatchServiceFactory<GeocodeOptions>;

  type IncidentDetailsV5ServiceFactory = ServiceFactory<
    incidentDetailsV5Options,
    IncidentDetailsV5Response
  >;
  type IncidentViewportServiceFactory = ServiceFactory<
    IncidentViewportOptions,
    IncidentViewportResponse
  >;
  type MatrixRoutingServiceFactory = ServiceFactory<MatrixRoutingOptions>;
  type ReverseGeocodeServiceFactory = BatchServiceFactory<
    ReverseGeocodeOptions
  >;
  type StaticImageServiceFactory = ServiceFactory<StaticImageOptions>;
  type PoiCategoriesServiceFactory = ServiceFactory<PoiCategoriesOptions>;
  type EvChargingStationsAvailabilityServiceFactory = ServiceFactory<
    EvChargingStationsAvailabilityOptions
  >;
  type StructuredGeocodeServiceFactory = BatchServiceFactory<
    StructuredGeocodeOptions
  >;
  type TrafficFlowSegmentDataServiceFactory = ServiceFactory<
    TrafficFlowSegmentDataOptions,
    TrafficFlowSegmentDataResponse
  >;

  type AdditionalOptions = {
    abortSignal: AbortSignal;
  };

  interface ServiceFactory<
    O extends {},
    R extends {} = GenericServiceResponse
  > {
    (options: O, additionalOptions?: AdditionalOptions): Promise<R>;
  }

  interface BatchServiceFactory<
    O extends {},
    R extends {} = GenericServiceResponse
  > {
    (options: O, additionalOptions?: AdditionalOptions): Promise<R>;
    (options: Batch<O>, additionalOptions?: AdditionalOptions): Promise<{
      batchItems: BatchItem<R>[];
      summary: BatchSummary;
    }>;
  }

  type BatchItem<R> = {
    statusCode: string;
    response: R;
  };

  type BatchSummary = {
    successfulRequests: string;
    totalRequests: string;
  };

  type GenericServiceResponse = {
    [prop: string]: any;
    getTrackingId(): string;
  };

  type Batch<O> = {
    /**
     * A valid API Key for the requested service.
     * A valid API Key is required to make use of the given service. It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    batchMode: "sync" | "async" | "redirect";

    /**
     * An array of objects which represent options for each call
     */
    batchItems: Omit<O, "key">[];
  };

  /**
   * Options to be passed to the search call, or an array of such options objects to perform a batch request.
   */
  type SearchOptions = {
    /**
     * A valid API Key for the requested service.
     * A valid API Key is required to make use of the given service. It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Language code that decides in which language the results should be returned.
     * The value should correspond to one of the supported IETF language codes. The list is available at https://developer.tomtom.com/search-api/search-api/supported-languages. The code is case insensitive.
     * @default null
     */
    language?: string;

    /**
     * The maximum number of responses that will be returned.
     * Represents the maximum number of responses that will be returned per request. The maximum value is 100.
     * @default 10
     */
    limit?: number;

    /**
     * The protocol type to be used in the calls.
     * Represents the type of protocol used to perform a service call.
     * @default "https"
     */
    protocol?: "http" | "https";

    /**
     * This option is used to indicate the mode in which the timeZone object should be returned.
     * The only available option is 'iana' - mode that shows the IANA ID which allows the user
     * to determine the current time zone for the POI.
     */
    timeZone?: "iana";

    /**
     * Enables the return of a comma-separted mapcodes list.
     * It can also filter the response to only show selected mapcode types. See Mapcodes in the response.
     * Values: One or more of:
     * * `Local`
     * * `International`
     * * `Alternative`
     *
     * A mapcode represents a specific location, to within a few meters.
     * Every location on Earth can be represented by a mapcode. Mapcodes are designed to be short,
     * easy to recognize, remember, and communicate. Visit the Mapcode project website for more information.
     */
    mapcodes?: string;

    /**
     * An optional parameter which can be used to restrict the result to the availability
     * for connectors with a specific maximum value of power in kilowatts.
     */
    maxPowerKW?: number;

    /**
     * An optional parameter which can be used to restrict the result to the availability
     * for connectors with a specific minimum value of power in kilowatts.
     */
    minPowerKW?: number;

    /**
     * This option is used to provide the possibility to return related Points Of Interest.
     * Points Of Interest can be related to each other when one is physically part of another.
     * For example, an airport terminal can physically belong to an airport.
     * This relationship is expressed as a parent/child relationship: the airport terminal
     * is a child of the airport.
     *
     * Accepted values: off, child, parent, all
     *
     * Usage:
     * * If the value `child` or `parent` is given, a related POIs with a specified relation
     * type will be returned in the Response.
     * * If the value `all` is given, then both child and parent relations are returned.
     * @default "off"
     */
    relatedPois?: "off" | "child" | "parent" | "all";
  };

  type FuzzySearchOptions = SearchOptions & {
    /**
     * Defines whether the geocode service should return the best result.
     *
     * It makes the service instances to return only one result, the best match result.
     * This option overwrites both limit and offset parameters. It changes the response from an array to a single
     * result.
     * @default false
     */
    bestResult?: boolean;

    /**
     * Bounding box area in one of the supported formats.
     *
     * The bounding box is a limited area within the search results. If it is omitted then the
     * whole world will be taken into consideration.
     * In case the area specified exceeds the world boundaries, the following actions will be taken
     * depending on which side was exceeded:
     * Latitudes: the exceeded values will be replaced with their maximun.
     * Longitudes: The service will split the area into two (or more) valid bounding boxes, will
     * execute a search request for each one, and then merge the responses into a single result.
     * This option is able to convert a number of popular formats into the bounding box.
     * The supported formats are listed below:
     * Maps.LngLatBounds class instance
     * {minLon: 0, minLat: 0, maxLon: 1, maxLat: 1} A plain object with the keys minLon, minLat, maxLon, maxLat.
     * [0, 0, 1, 1] An array of numbers describing the bounding box following the order: minLon, minLat,
     * maxLon, maxLat.
     * [[0, 0], [1, 1]] A two-dimensional array with two indexes [southWest, northEast], each one with
     * longitude and latitude values.
     * "0,0,1,1" A comma-separated string with numbers in the order: minLon, minLat, maxLon, maxLat.
     * [{lon: 0, lat: 0},{lon: 1, lat: 1}] A one-dimensional array with two objects in the order: southWest,
     * northEast, and each object with a lat and lon key.
     * [{lng: 0, lat: 0},{lng: 1, lat: 1}] A one-dimensional array with two objects in the order: southWest,
     * northEast and each object with a lat and lng key.
     * [Maps.LngLat, Maps.LngLat] A one-dimensional array with two Maps.LngLat instances in the order: southWest and northEast.
     * @default None
     */
    boundingBox?: LngLatBoundsRequestParam;

    /**
     * A list of brands divided by commas.
     *
     * This option specifies brands to use for the search.
     *
     *
     * @example
     * // search for TomTom and Foobar facilities
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom,Foobar'
     * })
     * .then(handleResults);
     * // search for TomTom offices
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom'
     * })
     * .then(handleResults);
     * @default None
     */
    brandSet?: string;

    /**
     * A list of categories codes divided by commas.
     *
     * This option specifies categories codes to use for the search. Those codes can be retrieved by using
     * poiCategories service.
     *
     *
     * @example
     * // search places of category Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315'
     * })
     * .then(handleResults);
     * // search places of category either Italian or French Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315025,7315017'
     * })
     * .then(handleResults);
     * @default None
     */
    categorySet?: string;

    /**
     * Longitude and latitude data in one of the supported formats.
     *
     * This option represents a geographic coordinate.
     * The supported formats are listed below:
     * Maps.LngLat The Class instance.
     * [0, 0] A one-dimensional array with two indexes for longitude and latitude respectively.
     * ["0", "0"] A one-dimensional array with two indexes for longitude and latitude respectively.
     * "0,1" A string with longitude and latitude divided by a comma.
     * {lng: Function, lat: Function} An object with two functions returning longitude and latitude.
     * {lon: 0, lat: 1} An object with two keys: lat and lon.
     * {lng: 0, lat: 1} An object with two keys: lat and lng.
     * {x: 0, y: 1} An object with two keys: x as longitude and y as latitude.
     * {longitude: 0, latitude: 1} An object with two keys: longitude and latitude.
     * Note: Supplying the center without a radius will bias search results only to
     * that area.
     * @default None
     */
    center?: LngLatRequestParam;

    /**
     * A list of Electrical Vehicle connector types divided by commas.
     *
     * This option specifies connector types, which could be used to restrict the result
     * to Points Of Interest of type Electric Vehicle Station supporting specific connector types.
     * For more info about EV connector names, please refer to
     * Supported Connector Types documentation page.
     *
     *
     * @example
     * // search for Electric Vehicle Station supporting IEC62196Type1
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1'
     * })
     * .then(handleResults);
     * // search for Electric Vehicle Station supporting IEC62196Type1 or GBT20234Part2
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1,GBT20234Part2'
     * })
     * .then(handleResults);
     * @default None
     */
    connectorSet?: string;

    /**
     * A comma-separated list of fuel types which could be used to restrict
     * the result to the Points Of Interest of specific fuels. If fuelSet is
     * specified, the query can remain empty. Only POIs with a proper fuel type
     * will be returned.
     *
     * Value: A comma-separated list of fuel type identifiers (in any order).
     * - Item order does not matter.
     * - When multiple fuel types are provided, only POIs that belong to (at least)
     * one of the fuel types from the provided list will be returned.
     *
     * @example
     * ```js
     * // search Points Of Interest of the ¨Diesel¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Diesel'
     * }).then(handleResults);
     * ```
     *
     * @example
     * ```js
     * // search Points Of Interest of either the ¨Petrol¨ or ¨LPG¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Petrol,LPG'
     * }).then(handleResults);
     * ```
     * @default None
     */
    fuelSet?: FuelSet;

    /**
     * Comma separated list of country codes (e.g.: FR,ES)
     *
     * This option is a list of country codes used to limit the search request to those specific political limits.
     * @default None
     */
    countrySet?: string;

    /**
     * Represent the indexes for extended postal codes.
     *
     * Represent the indexes for which extended postal codes should be included in the results.
     * The available indexes codes are:
     * Addr: Address ranges
     * Geo: Geographies
     * PAD: Point Addresses
     * POI: Points of Interest
     * Str: Streets
     * XStr: Cross Streets (intersections)
     * The value should be a comma-separated list of index types (in any order) or just the string "None"
     * for no indexes.
     *
     *
     * @example
     * tomtom.geometrySearch({
     * query: 'pizza',
     * extendedPostalCodesFor: 'PAD,Addr,POI'
     * })
     * .then(handleResults);
     * The extended postal code will be returned as an extendedPostalCode property of an address.
     * @default None
     */
    extendedPostalCodesFor?: string;

    /**
     * An array or comma-separated list of entity types which can be used to restrict the result to the Geography
     * result of a specific entity type. If entityTypeSet is specified, only a Geography result
     * with a proper entity type will be returned.
     *
     * - Item order in the list does not matter.
     * - Values are case sensitive.
     *
     * Available values:
     * - `Country`
     * - `CountrySubdivision`
     * - `CountrySecondarySubdivision`
     * - `CountryTertiarySubdivision`
     * - `Municipality`
     * - `MunicipalitySubdivision`
     * - `Neighbourhood`
     * - `PostalCodeArea`
     *
     * @example
     * ```js
     * // search only among certain types of Geography entities - only look for Countries
     * tt.services.fuzzySearch({
     *   query: 'Poland',
     *   entityTypeSet: 'Country'
     * }).then(handleResults);
     * ```
     *
     * @default None
     */
    entityTypeSet?: EntitTypeSet;

    /**
     * A list of indexes divided by commas.
     *
     * This option specifies indexes to use for the search.
     * The predefined indexes are:
     * Addr: Address range interpolation (when there is no PAD)
     * Geo: Geographies
     * PAD: Point Addresses
     * POI: Points of interest
     * Str: Streets
     * Xstr: Cross Streets (intersections)
     *
     *
     * @example
     * // search Points Of Interest only
     * tomtom.geometrySearch({
     * query: 'pizza',
     * idxSet: 'POI'
     * })
     * .then(handleResults);
     * // search addresses only
     * tomtom.geometrySearch()
     * tomtom.geometrySearch({
     * query: 'pizza',
     * idxSet: 'PAD,Addr'
     * })
     * .then(handleResults);
     * @default None
     */
    idxSet?: string;

    /**
     * The possible values are the integers 1, 2, 3, and 4.
     *
     * The maximum allowed value is 4.
     * @default None
     */
    maxFuzzyLevel?: 1 | 2 | 3 | 4;
    /**
     * The possible values are the integers 1, 2, 3, and 4.
     *
     * The maximum allowed value is 4.
     * @default None
     */
    minFuzzyLevel?: 1 | 2 | 3 | 4;

    /**
     * A positive integer value.
     *
     * Use this option if you want to apply an offset to the results returned by the
     * Search API service.
     * It makes use of the ofs parameter which allows paginated results when used with the
     * limit option.
     * The maximum value is 1900.
     * @default None
     */
    offset?: number;

    /**
     * The only available option is 'nextSevenDays'.
     *
     * This option shows the opening hours for the next week, starting with the current day in the local time of the POI.
     *
     *
     * @example
     * // search for cinemas inculding their opening hours.
     * tt.services.fuzzySearch({
     * query: 'cinema',
     * openingHours: 'nextSevenDays'
     * })
     * .then(handleResults);
     * @default None
     */
    openingHours?: "nextSevenDays";

    /**
     * The query string. This value will be properly encoded during the creation
     * of the request.
     *
     * This option represents the text that will be searched.
     * @default None
     */
    query?: string;

    /**
     * A positive integer value in meters.
     *
     * This option specifies the search radius in meters using the coordinates given to the center
     * option as origin.
     * @default None
     */
    radius?: number;

    /**
     * Enables or disables the option.
     *
     * If this option is enabled, the query will be interpreted as a partial input and the search will enter
     * predictive mode.
     * @default false
     */
    typeahead?: boolean;

    /**
     * The new value to be set.
     *
     * Sets or returns the view option value to be used in the calls.
     * Can be one of "Unified", "AR", "IN", "PK", "IL, "MA", "RU", "TR" and "CN".
     * Legend:
     * Unified - International view
     * AR - Argentina
     * IN - India
     * PK - Pakistan
     * IL - Israel
     * MA - Morocco
     * RU - Russia
     * TR - Turkey
     * CN - China
     * @default None
     */
    view?: View;
  };

  type CategorySearchOptions = SearchOptions & {
    /**
     * Defines whether the geocode service should return the best result.
     *
     * It makes the service instances to return only one result, the best match result.
     * This option overwrites both limit and offset parameters. It changes the response from an array to a single
     * result.
     * @default false
     */
    bestResult?: boolean;

    /**
     * Bounding box area in one of the supported formats.
     *
     * The bounding box is a limited area within the search results. If it is omitted then the
     * whole world will be taken into consideration.
     * In case the area specified exceeds the world boundaries, the following actions will be taken
     * depending on which side was exceeded:
     * Latitudes: the exceeded values will be replaced with their maximun.
     * Longitudes: The service will split the area into two (or more) valid bounding boxes, will
     * execute a search request for each one, and then merge the responses into a single result.
     * This option is able to convert a number of popular formats into the bounding box.
     * The supported formats are listed below:
     * Maps.LngLatBounds class instance
     * {minLon: 0, minLat: 0, maxLon: 1, maxLat: 1} A plain object with the keys minLon, minLat, maxLon, maxLat.
     * [0, 0, 1, 1] An array of numbers describing the bounding box following the order: minLon, minLat,
     * maxLon, maxLat.
     * [[0, 0], [1, 1]] A two-dimensional array with two indexes [southWest, northEast], each one with
     * longitude and latitude values.
     * "0,0,1,1" A comma-separated string with numbers in the order: minLon, minLat, maxLon, maxLat.
     * [{lon: 0, lat: 0},{lon: 1, lat: 1}] A one-dimensional array with two objects in the order: southWest,
     * northEast, and each object with a lat and lon key.
     * [{lng: 0, lat: 0},{lng: 1, lat: 1}] A one-dimensional array with two objects in the order: southWest,
     * northEast and each object with a lat and lon key.
     * [Maps.LngLat, Maps.LngLat] A one-dimensional array with two Maps.LngLat instances in the order: southWest and northEast.
     * @default None
     */
    boundingBox?: LngLatBoundsRequestParam;

    /**
     * A list of brands divided by commas.
     *
     * This option specifies brands to use for the search.
     *
     *
     * @example
     * // search for TomTom and Foobar facilities
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom,Foobar'
     * })
     * .then(handleResults);
     * // search for TomTom offices
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom'
     * })
     * .then(handleResults);
     * @default None
     */
    brandSet?: string;

    /**
     * A list of categories codes divided by commas.
     *
     * This option specifies categories codes to use for the search. Those codes can be retrieved by using
     * poiCategories service.
     *
     *
     * @example
     * // search places of category Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315'
     * })
     * .then(handleResults);
     * // search places of category either Italian or French Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315025,7315017'
     * })
     * .then(handleResults);
     * @default None
     */
    categorySet?: string;

    /**
     * Longitude and latitude data in one of the supported formats.
     *
     * This option represents a geographic coordinate.
     * The supported formats are listed below:
     * Maps.LngLat The Class instance.
     * [0, 0] A one-dimensional array with two indexes for longitude and latitude respectively.
     * ["0", "0"] A one-dimensional array with two indexes for longitude and latitude respectively.
     * "0,1" A string with longitude and latitude divided by a comma.
     * {lng: Function, lat: Function} An object with two functions returning longitude and latitude.
     * {lon: 0, lat: 1} An object with two keys: lat and lon.
     * {lng: 0, lat: 1} An object with two keys: lat and lng.
     * {x: 0, y: 1} An object with two keys: x as longitude and y as latitude.
     * {longitude: 0, latitude: 1} An object with two keys: longitude and latitude.
     * Note: Supplying the center without a radius will bias search results only to
     * that area.
     * @default None
     */
    center?: LngLatRequestParam;

    /**
     * A list of Electrical Vehicle connector types divided by commas.
     *
     * This option specifies connector types, which could be used to restrict the result
     * to Points Of Interest of type Electric Vehicle Station supporting specific connector types.
     * For more info about EV connector names, please refer to
     * Supported Connector Types documentation page.
     *
     *
     * @example
     * // search for Electric Vehicle Station supporting IEC62196Type1
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1'
     * })
     * .then(handleResults);
     * // search for Electric Vehicle Station supporting IEC62196Type1 or GBT20234Part2
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1,GBT20234Part2'
     * })
     * .then(handleResults);
     * @default None
     */
    connectorSet?: string;

    /**
     * A comma-separated list of fuel types which could be used to restrict
     * the result to the Points Of Interest of specific fuels. If fuelSet is
     * specified, the query can remain empty. Only POIs with a proper fuel type
     * will be returned.
     *
     * Value: A comma-separated list of fuel type identifiers (in any order).
     * - Item order does not matter.
     * - When multiple fuel types are provided, only POIs that belong to (at least)
     * one of the fuel types from the provided list will be returned.
     *
     * @example
     * ```js
     * // search Points Of Interest of the ¨Diesel¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Diesel'
     * }).then(handleResults);
     * ```
     *
     * @example
     * ```js
     * // search Points Of Interest of either the ¨Petrol¨ or ¨LPG¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Petrol,LPG'
     * }).then(handleResults);
     * ```
     * @default None
     */
    fuelSet?: FuelSet;

    /**
     * Comma separated list of country codes (e.g.: FR,ES)
     *
     * This option is a list of country codes used to limit the search request to those specific political limits.
     * @default None
     */
    countrySet?: string;

    /**
     * Represent the indexes for extended postal codes.
     *
     * Represent the indexes for which extended postal codes should be included in the results.
     * The available indexes codes are:
     * Addr: Address ranges
     * Geo: Geographies
     * PAD: Point Addresses
     * POI: Points of Interest
     * Str: Streets
     * XStr: Cross Streets (intersections)
     * The value should be a comma-separated list of index types (in any order) or just the string "None"
     * for no indexes.
     *
     *
     * @example
     * tomtom.geometrySearch({
     * query: 'pizza',
     * extendedPostalCodesFor: 'PAD,Addr,POI'
     * })
     * .then(handleResults);
     * The extended postal code will be returned as an extendedPostalCode property of an address.
     * @default None
     */
    extendedPostalCodesFor?: string;

    /**
     * A positive integer value.
     *
     * Use this option if you want to apply an offset to the results returned by the
     * Search API service.
     * It makes use of the ofs parameter which allows paginated results when used with the
     * limit option.
     * The maximum value is 1900.
     * @default None
     */
    offset?: number;

    /**
     * The only available option is 'nextSevenDays'.
     *
     * This option shows the opening hours for the next week, starting with the current day in the local time of the POI.
     *
     *
     * @example
     * // search for cinemas inculding their opening hours.
     * tt.services.fuzzySearch({
     * query: 'cinema',
     * openingHours: 'nextSevenDays'
     * })
     * .then(handleResults);
     * @default None
     */
    openingHours?: "nextSevenDays";

    /**
     * The query string. This value will be properly encoded during the creation
     * of the request.
     *
     * This option represents the text that will be searched.
     * @default None
     */
    query?: string;

    /**
     * A positive integer value in meters.
     *
     * This option specifies the search radius in meters using the coordinates given to the center
     * option as origin.
     * @default None
     */
    radius?: number;

    /**
     * Enables or disables the option.
     *
     * If this option is enabled, the query will be interpreted as a partial input and the search will enter
     * predictive mode.
     * @default false
     */
    typeahead?: boolean;

    /**
     * The new value to be set.
     *
     * Sets or returns the view option value to be used in the calls.
     * Can be one of "Unified", "AR", "IN", "PK", "IL, "MA", "RU", "TR" and "CN".
     * Legend:
     * Unified - International view
     * AR - Argentina
     * IN - India
     * PK - Pakistan
     * IL - Israel
     * MA - Morocco
     * RU - Russia
     * TR - Turkey
     * CN - China
     * @default None
     */
    view?: View;
  };

  type GeometrySearchOptions = SearchOptions & {
    /**
     * Represent the indexes for extended postal codes.
     *
     * Represent the indexes for which extended postal codes should be included in the results.
     * The available indexes codes are:
     * Addr: Address ranges
     * Geo: Geographies
     * PAD: Point Addresses
     * POI: Points of Interest
     * Str: Streets
     * XStr: Cross Streets (intersections)
     * The value should be a comma-separated list of index types (in any order) or just the string "None"
     * for no indexes.
     *
     *
     * @example
     * tomtom.geometrySearch({
     * query: 'pizza',
     * extendedPostalCodesFor: 'PAD,Addr,POI'
     * })
     * .then(handleResults);
     * The extended postal code will be returned as an extendedPostalCode property of an address.
     * @default None
     */
    extendedPostalCodesFor?: string;

    /**
     * A list of geometries.
     *
     * This is a list of geometries to search in.
     * Currently only two types of geometries are being supported:
     * Polygons: Groups of coordinates (lat, lon) that describe an enclosed area.
     * Circles: Describe a circular area using an unique coordinate and a radius in meters.
     *
     *
     * @example
     * // A polygon area
     * [
     * {
     * type: 'POLYGON',
     * vertices: [
     * '37.7524152343544,-122.43576049804686',
     * '37.70660472542312,-122.43301391601562',
     * '37.712059855877314,-122.36434936523438',
     * '37.75350561243041,-122.37396240234374'
     * ]
     * }
     * ];
     * // A couple of circle areas
     * var geometryList = [
     * {
     * type: 'CIRCLE',
     * position: '37.71205,-121.36434',
     * radius: 6000 // Unit is in meters
     * },
     * {
     * type: 'CIRCLE',
     * position: '37.31205,-121.36434',
     * radius: 1000 // Unit is in meters
     * }
     * ];
     * // Mixing polygons and circles areas
     * var geometryList = [
     * {
     * type: 'POLYGON',
     * vertices: [
     * '37.7524152343544,-122.43576049804686',
     * '37.70660472542312,-122.43301391601562',
     * '37.712059855877314,-122.36434936523438',
     * '37.75350561243041,-122.37396240234374'
     * ]
     * },
     * {
     * type: 'CIRCLE',
     * position: '37.71205,-121.36434',
     * radius: 6000 // Unit is in meters
     * },
     * {
     * type: 'CIRCLE',
     * position: '37.31205,-121.36434',
     * radius: 1000 // Unit is in meters
     * }
     * ];
     * @default None
     */
    geometryList?: Object[];

    /**
     * A list of indexes divided by commas.
     *
     * This option specifies indexes to use for the search.
     * The predefined indexes are:
     * Addr: Address range interpolation (when there is no PAD)
     * Geo: Geographies
     * PAD: Point Addresses
     * POI: Points of interest
     * Str: Streets
     * Xstr: Cross Streets (intersections)
     *
     *
     * @example
     * // search Points Of Interest only
     * tomtom.geometrySearch({
     * query: 'pizza',
     * idxSet: 'POI'
     * })
     * .then(handleResults);
     * // search addresses only
     * tomtom.geometrySearch()
     * tomtom.geometrySearch({
     * query: 'pizza',
     * idxSet: 'PAD,Addr'
     * })
     * .then(handleResults);
     * @default None
     */
    idxSet?: string;

    /**
     * The only available option is 'nextSevenDays'.
     *
     * This option shows the opening hours for the next week, starting with the current day in the local time of the POI.
     *
     *
     * @example
     * // search for cinemas inculding their opening hours.
     * tt.services.fuzzySearch({
     * query: 'cinema',
     * openingHours: 'nextSevenDays'
     * })
     * .then(handleResults);
     * @default None
     */
    openingHours?: "nextSevenDays";

    /**
     * The query string. This value will be properly encoded during the creation
     * of the request.
     *
     * This option represents the text that will be searched.
     * @default None
     */
    query?: string;

    /**
     * The new value to be set.
     *
     * Sets or returns the view option value to be used in the calls.
     * Can be one of "Unified", "AR", "IN", "PK", "IL, "MA", "RU", "TR" and "CN".
     * Legend:
     * Unified - International view
     * AR - Argentina
     * IN - India
     * PK - Pakistan
     * IL - Israel
     * MA - Morocco
     * RU - Russia
     * TR - Turkey
     * CN - China
     * @default None
     */
    view?: View;

    /**
     * A list of Electrical Vehicle connector types divided by commas.
     *
     * This option specifies connector types, which could be used to restrict the result
     * to Points Of Interest of type Electric Vehicle Station supporting specific connector types.
     * For more info about EV connector names, please refer to
     * Supported Connector Types documentation page.
     *
     *
     * @example
     * // search for Electric Vehicle Station supporting IEC62196Type1
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1'
     * })
     * .then(handleResults);
     * // search for Electric Vehicle Station supporting IEC62196Type1 or GBT20234Part2
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1,GBT20234Part2'
     * })
     * .then(handleResults);
     * @default None
     */
    connectorSet?: string;

    /**
     * A list of brands divided by commas.
     *
     * This option specifies brands to use for the search.
     *
     *
     * @example
     * // search for TomTom and Foobar facilities
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom,Foobar'
     * })
     * .then(handleResults);
     * // search for TomTom offices
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom'
     * })
     * .then(handleResults);
     * @default None
     */
    brandSet?: string;

    /**
     * A list of categories codes divided by commas.
     *
     * This option specifies categories codes to use for the search. Those codes can be retrieved by using
     * poiCategories service.
     *
     *
     * @example
     * // search places of category Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315'
     * })
     * .then(handleResults);
     * // search places of category either Italian or French Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315025,7315017'
     * })
     * .then(handleResults);
     * @default None
     */
    categorySet?: string;

    /**
     * An array or comma-separated list of entity types which can be used to restrict
     * the result to a specific entity type. Parameter should be used with
     * the idxSet parameter set to the Geography value.
     *
     * Available values:
     * - `Country`
     * - `CountrySubdivision`
     * - `CountrySecondarySubdivision`
     * - `CountryTertiarySubdivision`
     * - `Municipality`
     * - `MunicipalitySubdivision`
     * - `Neighbourhood`
     * - `PostalCodeArea`
     *
     * @default None
     */
    entityTypeSet?: EntitTypeSet;
  };

  type NearbySearchOptions = SearchOptions & {
    /**
     * Defines whether the geocode service should return the best result.
     *
     * It makes the service instances to return only one result, the best match result.
     * This option overwrites both limit and offset parameters. It changes the response from an array to a single
     * result.
     * @default false
     */
    bestResult?: boolean;

    /**
     * A list of brands divided by commas.
     *
     * This option specifies brands to use for the search.
     *
     *
     * @example
     * // search for TomTom and Foobar facilities
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom,Foobar'
     * })
     * .then(handleResults);
     * // search for TomTom offices
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom'
     * })
     * .then(handleResults);
     * @default None
     */
    brandSet?: string;

    /**
     * A list of categories codes divided by commas.
     *
     * This option specifies categories codes to use for the search. Those codes can be retrieved by using
     * poiCategories service.
     *
     *
     * @example
     * // search places of category Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315'
     * })
     * .then(handleResults);
     * // search places of category either Italian or French Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315025,7315017'
     * })
     * .then(handleResults);
     * @default None
     */
    categorySet?: string;

    /**
     * Longitude and latitude data in one of the supported formats.
     *
     * This option represents a geographic coordinate.
     * The supported formats are listed below:
     * Maps.LngLat The Class instance.
     * [0, 0] A one-dimensional array with two indexes for longitude and latitude respectively.
     * ["0", "0"] A one-dimensional array with two indexes for longitude and latitude respectively.
     * "0,1" A string with longitude and latitude divided by a comma.
     * {lng: Function, lat: Function} An object with two functions returning longitude and latitude.
     * {lon: 0, lat: 1} An object with two keys: lat and lon.
     * {lng: 0, lat: 1} An object with two keys: lat and lng.
     * {x: 0, y: 1} An object with two keys: x as longitude and y as latitude.
     * {longitude: 0, latitude: 1} An object with two keys: longitude and latitude.
     * Note: Supplying the center without a radius will bias search results only to
     * that area.
     * @default None
     */
    center?: LngLatRequestParam;

    /**
     * A list of Electrical Vehicle connector types divided by commas.
     *
     * This option specifies connector types, which could be used to restrict the result
     * to Points Of Interest of type Electric Vehicle Station supporting specific connector types.
     * For more info about EV connector names, please refer to
     * Supported Connector Types documentation page.
     *
     *
     * @example
     * // search for Electric Vehicle Station supporting IEC62196Type1
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1'
     * })
     * .then(handleResults);
     * // search for Electric Vehicle Station supporting IEC62196Type1 or GBT20234Part2
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1,GBT20234Part2'
     * })
     * .then(handleResults);
     * @default None
     */
    connectorSet?: string;

    /**
     * A comma-separated list of fuel types which could be used to restrict
     * the result to the Points Of Interest of specific fuels. If fuelSet is
     * specified, the query can remain empty. Only POIs with a proper fuel type
     * will be returned.
     *
     * Value: A comma-separated list of fuel type identifiers (in any order).
     * - Item order does not matter.
     * - When multiple fuel types are provided, only POIs that belong to (at least)
     * one of the fuel types from the provided list will be returned.
     *
     * @example
     * ```js
     * // search Points Of Interest of the ¨Diesel¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Diesel'
     * }).then(handleResults);
     * ```
     *
     * @example
     * ```js
     * // search Points Of Interest of either the ¨Petrol¨ or ¨LPG¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Petrol,LPG'
     * }).then(handleResults);
     * ```
     * @default None
     */
    fuelSet?: FuelSet;

    /**
     * Comma separated list of country codes (e.g.: FR,ES)
     *
     * This option is a list of country codes used to limit the search request to those specific political limits.
     * @default None
     */
    countrySet?: string;

    /**
     * Represent the indexes for extended postal codes.
     *
     * Represent the indexes for which extended postal codes should be included in the results.
     * The available indexes codes are:
     * Addr: Address ranges
     * Geo: Geographies
     * PAD: Point Addresses
     * POI: Points of Interest
     * Str: Streets
     * XStr: Cross Streets (intersections)
     * The value should be a comma-separated list of index types (in any order) or just the string "None"
     * for no indexes.
     *
     *
     * @example
     * tomtom.geometrySearch({
     * query: 'pizza',
     * extendedPostalCodesFor: 'PAD,Addr,POI'
     * })
     * .then(handleResults);
     * The extended postal code will be returned as an extendedPostalCode property of an address.
     * @default None
     */
    extendedPostalCodesFor?: string;

    /**
     * A positive integer value.
     *
     * Use this option if you want to apply an offset to the results returned by the
     * Search API service.
     * It makes use of the ofs parameter which allows paginated results when used with the
     * limit option.
     * The maximum value is 1900.
     * @default None
     */
    offset?: number;

    /**
     * The only available option is 'nextSevenDays'.
     *
     * This option shows the opening hours for the next week, starting with the current day in the local time of the POI.
     *
     *
     * @example
     * // search for cinemas inculding their opening hours.
     * tt.services.fuzzySearch({
     * query: 'cinema',
     * openingHours: 'nextSevenDays'
     * })
     * .then(handleResults);
     * @default None
     */
    openingHours?: "nextSevenDays";

    /**
     * A positive integer value in meters.
     *
     * This option specifies the search radius in meters using the coordinates given to the center
     * option as origin.
     * @default 10000
     */
    radius?: number;

    /**
     * The new value to be set.
     *
     * Sets or returns the view option value to be used in the calls.
     * Can be one of "Unified", "AR", "IN", "PK", "IL, "MA", "RU", "TR" and "CN".
     * Legend:
     * Unified - International view
     * AR - Argentina
     * IN - India
     * PK - Pakistan
     * IL - Israel
     * MA - Morocco
     * RU - Russia
     * TR - Turkey
     * CN - China
     * @default None
     */
    view?: View;
  };

  type PlaceByIdOptions = {
    /**
     * The identifier of a specific POI, e.g. 'g6Fjo05MRKJpZK81MjgwMDkwMDQyNDY3OTKhdqdVbmlmaWVk'.
     * @default None
     */
    entityId: string;

    /**
     * A valid API Key for the requested service.
     * Key is required to make use of the given service. It can be issued in the {@link https://developer.tomtom.com/|Developer Portal.}
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Language code that decides in which language the results should be returned.
     * The value should correspond to one of the supported IETF language codes. The list is available {@link https://developer.tomtom.com/search-api/search-api/supported-languages|here.}
     * The code is case insensitive.
     * @default null
     */
    language?: string;

    /**
     * Enables the return of a comma-separted mapcodes list.
     * It can also filter the response to only show selected mapcode types. See Mapcodes in the response.
     * Values: One or more of:
     * * `Local`
     * * `International`
     * * `Alternative`
     *
     * A mapcode represents a specific location, to within a few meters.
     * Every location on Earth can be represented by a mapcode. Mapcodes are designed to be short,
     * easy to recognize, remember, and communicate. Visit the Mapcode project website for more information.
     */
     mapcodes?: string;

    /**
     * This option is used to provide the possibility to return related Points Of Interest.
     * Points Of Interest can be related to each other when one is physically part of another.
     * For example, an airport terminal can physically belong to an airport.
     * This relationship is expressed as a parent/child relationship: the airport terminal
     * is a child of the airport.
     *
     * Accepted values: off, child, parent, all
     *
     * Usage:
     * * If the value `child` or `parent` is given, a related POIs with a specified relation
     * type will be returned in the Response.
     * * If the value `all` is given, then both child and parent relations are returned.
     * @default "off"
     */
     relatedPois?: "off" | "child" | "parent" | "all";

    /**
     * The only available option is 'nextSevenDays'.
     *
     * This option shows the opening hours for the next week, starting with the current day in the local time of the POI.
     *
     *
     * @example
     * // search for cinemas inculding their opening hours.
     * tt.services.fuzzySearch({
     * query: 'cinema',
     * openingHours: 'nextSevenDays'
     * })
     * .then(handleResults);
     * @default None
     */
     openingHours?: "nextSevenDays";

    /**
     * This option is used to indicate the mode in which the timeZone object should be returned.
     * The only available option is 'iana' - mode that shows the IANA ID which allows the user
     * to determine the current time zone for the POI.
     */
     timeZone?: "iana";
  };

  type PoiSearchOptions = SearchOptions & {
    /**
     * Defines whether the geocode service should return the best result.
     *
     * It makes the service instances to return only one result, the best match result.
     * This option overwrites both limit and offset parameters. It changes the response from an array to a single
     * result.
     * @default false
     */
    bestResult?: boolean;

    /**
     * Bounding box area in one of the supported formats.
     *
     * The bounding box is a limited area within the search results. If it is omitted then the
     * whole world will be taken into consideration.
     * In case the area specified exceeds the world boundaries, the following actions will be taken
     * depending on which side was exceeded:
     * Latitudes: the exceeded values will be replaced with their maximun.
     * Longitudes: The service will split the area into two (or more) valid bounding boxes, will
     * execute a search request for each one, and then merge the responses into a single result.
     * This option is able to convert a number of popular formats into the bounding box.
     * The supported formats are listed below:
     * Maps.LngLatBounds class instance
     * {minLon: 0, minLat: 0, maxLon: 1, maxLat: 1} A plain object with the keys minLon, minLat, maxLon, maxLat.
     * [0, 0, 1, 1] An array of numbers describing the bounding box following the order: minLon, minLat,
     * maxLon, maxLat.
     * [[0, 0], [1, 1]] A two-dimensional array with two indexes [southWest, northEast], each one with
     * longitude and latitude values.
     * "0,0,1,1" A comma-separated string with numbers in the order: minLon, minLat, maxLon, maxLat.
     * [{lon: 0, lat: 0},{lon: 1, lat: 1}] A one-dimensional array with two objects in the order: southWest,
     * northEast, and each object with a lat and lon key.
     * [{lng: 0, lat: 0},{lng: 1, lat: 1}] A one-dimensional array with two objects in the order: southWest,
     * northEast and each object with a lat and lon key.
     * [Maps.LngLat, Maps.LngLat] A one-dimensional array with two Maps.LngLat instances in the order: southWest and northEast.
     * @default None
     */
    boundingBox?: LngLatBoundsRequestParam;

    /**
     * A list of brands divided by commas.
     *
     * This option specifies brands to use for the search.
     *
     *
     * @example
     * // search for TomTom and Foobar facilities
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom,Foobar'
     * })
     * .then(handleResults);
     * // search for TomTom offices
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom'
     * })
     * .then(handleResults);
     * @default None
     */
    brandSet?: string;

    /**
     * A list of categories codes divided by commas.
     *
     * This option specifies categories codes to use for the search. Those codes can be retrieved by using
     * poiCategories service.
     *
     *
     * @example
     * // search places of category Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315'
     * })
     * .then(handleResults);
     * // search places of category either Italian or French Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315025,7315017'
     * })
     * .then(handleResults);
     * @default None
     */
    categorySet?: string;

    /**
     * Longitude and latitude data in one of the supported formats.
     *
     * This option represents a geographic coordinate.
     * The supported formats are listed below:
     * Maps.LngLat The Class instance.
     * [0, 0] A one-dimensional array with two indexes for longitude and latitude respectively.
     * ["0", "0"] A one-dimensional array with two indexes for longitude and latitude respectively.
     * "0,1" A string with longitude and latitude divided by a comma.
     * {lng: Function, lat: Function} An object with two functions returning longitude and latitude.
     * {lon: 0, lat: 1} An object with two keys: lat and lon.
     * {lng: 0, lat: 1} An object with two keys: lat and lng.
     * {x: 0, y: 1} An object with two keys: x as longitude and y as latitude.
     * {longitude: 0, latitude: 1} An object with two keys: longitude and latitude.
     * Note: Supplying the center without a radius will bias search results only to
     * that area.
     * @default None
     */
    center?: LngLatRequestParam;

    /**
     * A list of Electrical Vehicle connector types divided by commas.
     *
     * This option specifies connector types, which could be used to restrict the result
     * to Points Of Interest of type Electric Vehicle Station supporting specific connector types.
     * For more info about EV connector names, please refer to
     * Supported Connector Types documentation page.
     *
     *
     * @example
     * // search for Electric Vehicle Station supporting IEC62196Type1
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1'
     * })
     * .then(handleResults);
     * // search for Electric Vehicle Station supporting IEC62196Type1 or GBT20234Part2
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1,GBT20234Part2'
     * })
     * .then(handleResults);
     * @default None
     */
    connectorSet?: string;

    /**
     * A comma-separated list of fuel types which could be used to restrict
     * the result to the Points Of Interest of specific fuels. If fuelSet is
     * specified, the query can remain empty. Only POIs with a proper fuel type
     * will be returned.
     *
     * Value: A comma-separated list of fuel type identifiers (in any order).
     * - Item order does not matter.
     * - When multiple fuel types are provided, only POIs that belong to (at least)
     * one of the fuel types from the provided list will be returned.
     *
     * @example
     * ```js
     * // search Points Of Interest of the ¨Diesel¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Diesel'
     * }).then(handleResults);
     * ```
     *
     * @example
     * ```js
     * // search Points Of Interest of either the ¨Petrol¨ or ¨LPG¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Petrol,LPG'
     * }).then(handleResults);
     * ```
     * @default None
     */
    fuelSet?: FuelSet;

    /**
     * Comma separated list of country codes (e.g.: FR,ES)
     *
     * This option is a list of country codes used to limit the search request to those specific political limits.
     * @default None
     */
    countrySet?: string;

    /**
     * Represent the indexes for extended postal codes.
     *
     * Represent the indexes for which extended postal codes should be included in the results.
     * The available indexes codes are:
     * Addr: Address ranges
     * Geo: Geographies
     * PAD: Point Addresses
     * POI: Points of Interest
     * Str: Streets
     * XStr: Cross Streets (intersections)
     * The value should be a comma-separated list of index types (in any order) or just the string "None"
     * for no indexes.
     *
     *
     * @example
     * tomtom.geometrySearch({
     * query: 'pizza',
     * extendedPostalCodesFor: 'PAD,Addr,POI'
     * })
     * .then(handleResults);
     * The extended postal code will be returned as an extendedPostalCode property of an address.
     * @default None
     */
    extendedPostalCodesFor?: string;

    /**
     * A positive integer value.
     *
     * Use this option if you want to apply an offset to the results returned by the
     * Search API service.
     * It makes use of the ofs parameter which allows paginated results when used with the
     * limit option.
     * The maximum value is 1900.
     * @default None
     */
    offset?: number;

    /**
     * The only available option is 'nextSevenDays'.
     *
     * This option shows the opening hours for the next week, starting with the current day in the local time of the POI.
     *
     *
     * @example
     * // search for cinemas inculding their opening hours.
     * tt.services.fuzzySearch({
     * query: 'cinema',
     * openingHours: 'nextSevenDays'
     * })
     * .then(handleResults);
     * @default None
     */
    openingHours?: "nextSevenDays";

    /**
     * The query string. This value will be properly encoded during the creation
     * of the request.
     *
     * This option represents the text that will be searched.
     * @default None
     */
    query?: string;

    /**
     * A positive integer value in meters.
     *
     * This option specifies the search radius in meters using the coordinates given to the center
     * option as origin.
     * @default 0
     */
    radius?: number;

    /**
     * Enables or disables the option.
     *
     * If this option is enabled, the query will be interpreted as a partial input and the search will enter
     * predictive mode.
     * @default false
     */
    typeahead?: boolean;

    /**
     * The new value to be set.
     *
     * Sets or returns the view option value to be used in the calls.
     * Can be one of "Unified", "AR", "IN", "PK", "IL, "MA", "RU", "TR" and "CN".
     * Legend:
     * Unified - International view
     * AR - Argentina
     * IN - India
     * PK - Pakistan
     * IL - Israel
     * MA - Morocco
     * RU - Russia
     * TR - Turkey
     * CN - China
     * @default None
     */
    view?: View;
  };

  type AlongRouteSearchOptions = SearchOptions & {
    /**
     * A list of brands divided by commas.
     *
     * This option specifies brands to use for the search.
     *
     *
     * @example
     * // search for TomTom and Foobar facilities
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom,Foobar'
     * })
     * .then(handleResults);
     * // search for TomTom offices
     * tt.services.fuzzySearch({
     * query: 'office',
     * brandSet: 'TomTom'
     * })
     * .then(handleResults);
     * @default None
     */
    brandSet?: string;

    /**
     * A list of categories codes divided by commas.
     *
     * This option specifies categories codes to use for the search. Those codes can be retrieved by using
     * poiCategories service.
     *
     *
     * @example
     * // search places of category Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315'
     * })
     * .then(handleResults);
     * // search places of category either Italian or French Restaurant
     * tt.services.fuzzySearch({
     * query: 'food',
     * categorySet: '7315025,7315017'
     * })
     * .then(handleResults);
     * @default None
     */
    categorySet?: string;

    /**
     * A list of Electrical Vehicle connector types divided by commas.
     *
     * This option specifies connector types, which could be used to restrict the result
     * to Points Of Interest of type Electric Vehicle Station supporting specific connector types.
     * For more info about EV connector names, please refer to
     * Supported Connector Types documentation page.
     *
     *
     * @example
     * // search for Electric Vehicle Station supporting IEC62196Type1
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1'
     * })
     * .then(handleResults);
     * // search for Electric Vehicle Station supporting IEC62196Type1 or GBT20234Part2
     * tt.services.fuzzySearch({
     * query: 'station',
     * connectorSet: 'IEC62196Type1,GBT20234Part2'
     * })
     * .then(handleResults);
     * @default None
     */
    connectorSet?: string;

    /**
     * Parameter which turns on calculation of the distance between the
     * start of the route and the starting point of the detour to a POI.
     *
     * * Detour offset is also calculated when `sortBy` parameter is set to `detourOffset`.
     * * Value is provided in a response only when `detourOffset` is set to `true`.
     */
    detourOffset?: boolean;

    /**
     * A comma-separated list of fuel types which could be used to restrict
     * the result to the Points Of Interest of specific fuels. If fuelSet is
     * specified, the query can remain empty. Only POIs with a proper fuel type
     * will be returned.
     *
     * Value: A comma-separated list of fuel type identifiers (in any order).
     * - Item order does not matter.
     * - When multiple fuel types are provided, only POIs that belong to (at least)
     * one of the fuel types from the provided list will be returned.
     *
     * @example
     * ```js
     * // search Points Of Interest of the ¨Diesel¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Diesel'
     * }).then(handleResults);
     * ```
     *
     * @example
     * ```js
     * // search Points Of Interest of either the ¨Petrol¨ or ¨LPG¨ fuel type
     * tt.services.fuzzySearch({
     *   query: 'Gas stations',
     *   fuelSet: 'Petrol,LPG'
     * }).then(handleResults);
     * ```
     * @default None
     */
    fuelSet?: FuelSet;

    /**
     * New maximum detour time in seconds.
     *
     * The maximum allowed value is 3600.
     * @default None
     */
    maxDetourTime?: number;

    /**
     * The only available option is 'nextSevenDays'.
     *
     * This option shows the opening hours for the next week, starting with the current day in the local time of the POI.
     *
     *
     * @example
     * // search for cinemas inculding their opening hours.
     * tt.services.fuzzySearch({
     * query: 'cinema',
     * openingHours: 'nextSevenDays'
     * })
     * .then(handleResults);
     * @default None
     */
    openingHours?: "nextSevenDays";

    /**
     * Parameter which provides possibility to sort returned results.
     * Values: `detourTime`, `detourDistance`, `detourOffset`
     *
     * * Detour distance will be calculated as a difference between the original distance and the distance of a new
     * route with Point Of Interest location.
     * * `detourDistance` field will be present in every response regardless of sorting parameter.
     * * If detour offset is set to false `detourOffset=false` and sorting parameter is set to detourOffset
     * `sortBy=detourOffset` then detour offset will be calculated and results will be sorted as expected, but
     * detourOffset value will not be present in the response.
     */
    sortBy?: "detourTime" | "detourOffset" | "detourDistance";

    /**
     * The query string. This value will be properly encoded during the creation
     * of the request.
     *
     * This option represents the text that will be searched.
     * @default None
     */
    query?: string;

    /**
     * Route representation.
     *
     * The following formats are supported:
     * String[] (longitude/latitude pairs)
     * ["4.8,52.3", "4.8,52.3"]
     *
     * Array[] (longitude/latitude pairs)
     * [ [4.8,52.3], [4.8,52.3] ]
     *
     * Object[]
     * {lon: 4.8, lat: 52.3}
     * {lng: 5.8, lat: 53.3}
     * {x: 53.3, y: 5.8}
     * {longitude: 5.8, latitude: 53.3}
     * {lng: Function, lat: Function} The functions should return a numeric value.
     *
     *
     *
     * @example
     * function callbackFn(response) {
     * console.log(response);
     * }
     * tomtom.alongRouteSearch({
     * route:[
     * {
     * lat: 37.7524152343544,
     * lon:-122.43576049804686
     * },
     * {
     * lat: 37.70660472542312,
     * lon:-122.43301391601562
     * }
     * ]
     * })
     * .then(callbackFn);
     * @default None
     */
    route?:
      | Record<string, string | number | Function>[]
      | string[]
      | [number, number][];

    /**
     * Enables the spreading of returned results evenly along the route.
     * @default None
     */
    spreadingMode?: string;

    /**
     * This option is used to indicate the mode in which the timeZone object should be returned.
     * The only available option is 'iana' - mode that shows the IANA ID which allows the user
     * to determine the current time zone for the POI.
     */
    timeZone?: "iana";

    /**
     * The new value to be set.
     *
     * Sets or returns the view option value to be used in the calls.
     * Can be one of "Unified", "AR", "IN", "PK", "IL, "MA", "RU", "TR" and "CN".
     * Legend:
     * Unified - International view
     * AR - Argentina
     * IN - India
     * PK - Pakistan
     * IL - Israel
     * MA - Morocco
     * RU - Russia
     * TR - Turkey
     * CN - China
     * @default None
     */
    view?: View;
  };

  type CalculateRouteResult = {
    formatVersion: string;
    routes: Route[];
    optimizedWaypoints?: { providedIndex: number; optimizedIndex: number }[];
    report?: Report;
  };

  type LongDistanceEvRoutingResponse = {
    formatVersion: string;
    routes: EvRoute[];
    toGeoJson(): GeoJSON.FeatureCollection<LineString | MultiLineString, GeoJsonRouteProperties>;
    report?: Report;
  };

  type EvRoute = {
    legs: EvRouteLeg[];
    sections: RouteSection[];
    summary: EvRouteSummary;
  }

  type TravelMode = | "car"  | "truck"  | "taxi"  | "bus"  | "van"
                    | "motorcycle"  | "bicycle"  | "pedestrian";

  type Route = {
    legs: RouteLeg[];
    sections: RouteSection[];
    summary: RouteSummary;
    guidance?: Guidance;
  };

  type Report = {
    effectiveSettings: { key: string; value: string }[];
  };

  type RouteLeg = {
    points: LatLng[];
    summary: RouteSummary;
  };

  type EvRouteLeg = {
    point: LatLng[];
    summary: EvRouteLegSummary;
  }

  type RouteSection = {
    endPointIndex: number;
    sectionType: string;
    startPointIndex: number;
    travelMode: TravelMode;
  };

  type RouteSummary = {
    arrivalTime: string;
    departureTime: string;
    lengthInMeters: number;
    trafficDelayInSeconds: number;
    travelTimeInSeconds: number;
  };

  type EvRouteSummary = RouteSummary & {
    remainingChargeAtArrivalInkWh: number,
    totalChargingTimeInSeconds?: number
  };

  type EvRouteLegSummary = EvRouteSummary & {
    chargingInformationAtEndOfLeg: {
      chargingParkUuid: string,
      chargingTimeInSeconds: number,
      targetChargeInkWh: number,
      chargingConnections: ChargingConnection[]
    }
  }

  type Guidance = {
    instructions: Object[];
    instructionGroups: Object[];
  };

  /**
    * Contains one facilityType and one plugType which are compatible
    * with the vehicle.
    */
  type ChargingConnection = {
    /**
     * A string matching a `facilityType` in the values table, which
     * can be found in [Long Distance EV Routing API documentation](LONG_DISTANCE_EV_ROUTING_URL).
     */
    facilityType?: string,
    /**
     * A string matching a `plugType` in the values table, which
     * can be found in [Long Distance EV Routing API documentation](LONG_DISTANCE_EV_ROUTING_URL).
     */
    plugType?: string,
  }

  //Parameters which are common for different routing services
  type CommonRoutingParameters = {
    /**
     * Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the
     * vehicle accelerates (i.e., KineticEnergyGained/ChemicalEnergyConsumed).
     * ChemicalEnergyConsumed is obtained by converting consumed fuel to chemical energy using
     * fuelEnergyDensityInMJoulesPerLiter.
     * @default None
     */
    accelerationEfficiency?: number;

    /**
     * Specifies the amount of power consumed for sustaining auxiliary systems in kilowatts (kW).
     * It can be used to specify consumption due to devices and systems such as AC systems, radio, heating, etc.
     * @default None
     */
    auxiliaryPowerInkW?: number;

    /**
     * Specifies something that the route calculation should try to avoid when
     * determining the route.
     *
     * Specifies something that the route calculation should try to avoid when determining the route. Can be
     * specified multiple times. Possible values:
     * tollRoads: avoids toll roads.
     * motorways: avoids motorways.
     * ferries: avoids ferries.
     * unpavedRoads: avoids unpaved roads.
     * carpools: avoids routes that require use of a carpool (HOV/ High Occupancy Vehicle) lanes.
     * alreadyUsedRoads: avoids using the same road multiple times.
     * Most useful in conjunction with routeType=thrilling.
     * @default None
     */
    avoid?: Avoidable | Avoidable[];

    /**
     * Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the
     * vehicle decelerates (i.e., ChemicalEnergySaved/KineticEnergyLost).
     * ChemicalEnergySaved is obtained by converting saved (not consumed) fuel to energy using
     * fuelEnergyDensityInMJoulesPerLiter.
     * @default None
     */
    decelerationEfficiency?: number;

    /**
     * The properly formatted date with the time or 'now' value. Date
     * cannot be in the past and has to follow ISO 8601 standard.
     *
     * The date and time of departure from the origin point.
     * Departure times, apart from now, must be specified as a dateTime.
     * When a time zone offset is not specified, it will be assumed to be that of the origin point.
     * The departAt value must be in the future. The departAt parameter cannot be used in conjunction with
     * arriveAt.
     * @default None
     */
    departAt?: string;

    /**
     * Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the
     * vehicle loses elevation (i.e., ChemicalEnergySaved/PotentialEnergyLost).
     * ChemicalEnergySaved is obtained by converting saved (not consumed) fuel to energy using
     * fuelEnergyDensityInMJoulesPerLiter.
     * @default None
     */
    downhillEfficiency?: number;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * These are the specified locations for route calculation.
     *
     * Locations through which the route is calculated. The
     * following constraints apply:
     * At least two locations must be provided.
     * The first location in the sequence defines the origin and must be of type 'point'.
     * The last location in the sequence defines the destination and must be of type 'point'.
     * One or more optional intermediate locations (known as waypoints) may be provided:
     * The maximum allowed number of waypoints is 50, reduced to 20 when computeBestOrder is true.
     * A point waypoint results in an extra leg in the response, a circle waypoint does not.
     * Circle waypoints cannot be used when computeBestOrder is true.
     *
     * The points or circles that will be used to calculate the route. The following input types are allowed:
     * A string with colon-delimited locations. For example '13.42936,52.50931:13.43872,52.50274'
     * where comma divides longitude and latitude.
     * An array containing locations.
     * Location can be defined as a string, object, or array.
     * @default None
     */
    locations?: string | string[] | LngLatLike[];

    /**
     * The level of a verbose answer from the service, useful for debugging purposes.
     *
     * Specifies which data should be reported for diagnosis purposes.
     * Possible values: effectiveSettings
     * Reports the effective parameters or data used when calling the API.
     * In the case of defaulted parameters, the default will be reflected where the parameter was not specified
     * by the caller.
     * @default None
     */
    report?: "effectiveSettings";

    /**
     * A boolean flag determines if traffic data should be used to calculate the
     * route.
     *
     * Possible values:
     * true (do consider all available traffic information during routing)
     * false (ignores current traffic data during routing) Note that although the current traffic data is
     * ignored during routing, the effect of historic traffic on effective road speeds is still incorporated.
     * The default is true.
     * @default true
     */
    traffic?: boolean;

    /**
     * An array of section types.
     *
     * Specifies which of the section types is reported in the route response.
     * Possible values:
     * carTrain, ferry, tunnel or motorway: get
     * sections if the route includes car trains, ferries, tunnels, or motorways.
     * pedestrian: sections which are only suited for pedestrians.
     * tollRoad: sections which require a toll to be payed.
     * tollVignette: sections which require a toll vignette to be present.
     * country: countries the route has parts in.
     * carpool: sections of the route that require use of carpool (HOV/High Occupancy Vehicle) lanes.
     * urban: sections of the route that are located within urban areas.
     * unpaved: sections of the route that are unpaved.
     * travelMode: sections in relation to the request parameter 'travelMode'.
     * The default value is travelMode.
     * @default None
     */
    sectionType?: Section | Section[];

    /**
     * Specifies the efficiency of converting chemical energy stored in fuel to potential energy
     * when the vehicle gains elevation (i.e., PotentialEnergyGained/ChemicalEnergyConsumed).
     * ChemicalEnergyConsumed is obtained by converting consumed fuel to chemical energy using
     * fuelEnergyDensityInMJoulesPerLiter.
     * @default None
     */
    uphillEfficiency?: number;

    /**
     * The vehicle axle wight in kg (kilograms).
     *
     * Weight per axle of the vehicle in kg (kilograms). A value of 0 means that weight restrictions per axle are not
     * considered during route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleAxleWeight?: number;

    /**
     * True if the vehicle is used for commercial purposes.
     *
     * The vehicle is used for commercial purposes and thus may not be allowed to drive on some roads. This
     * parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleCommercial?: boolean;

    /**
     * The angle in which the vehicle is heading.
     *
     * The directional heading of the vehicle in degrees starting at true North and continuing in a clockwise
     * direction. North is 0 degrees, East is 90 degrees, South is 180 degrees, West is 270 degrees. Possible
     * values are 0-359.
     * @default None
     */
    vehicleHeading?: number;

    /**
     * The vehicle height in meters.
     *
     * Height of the vehicle in meters. A value of 0 means that height restrictions are not considered
     * during route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleHeight?: number;

    /**
     * The vehicle length in meters.
     *
     * Length of the vehicle in meters. A value of 0 means that length restrictions are not considered during
     * route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */

    vehicleLength?: number;
    /**
     * The maximal allowed vehicle speed in km/h.
     *
     * Maximum speed of the vehicle in km/hour. A value of 0 means that an appropriate value for the vehicle
     * will be determined and applied during route planning. A non-zero value may be overridden during route
     * planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleMaxSpeed?: number;

    /**
     * The vehicle weight in kg (kilograms).
     *
     * Weight of the vehicle in kg. A value of 0 means that weight restrictions are not considered during route
     * planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleWeight?: number;

    /**
     * The vehicle width in meters.
     *
     * Width of the vehicle in meters. A value of 0 means that width restrictions are not considered during
     * route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleWidth?: number;

    /**
     * Specifies the electric energy in kWh gained by the vehicle through losing 1000 meters of elevation.
     * * Note: It must be paired with consumptionInkWhPerkmAltitudeGain.
     * * Note: It cannot be used with accelerationEfficiency, decelerationEfficiency, uphillEfficiency
     * or downhillEfficiency.
     *
     * Minimum value: 0.0
     * Maximum value: consumptionInkWhPerkmAltitudeGain
     *
     * @attribute recuperationInkWhPerkmAltitudeLoss
     * @param {Number} [options.recuperationInkWhPerkmAltitudeLoss] Electric energy in kWh
     */
    recuperationInkWhPerkmAltitudeLoss?: number;

  /**
   * Specifies the electric energy in kWh consumed by the vehicle through gaining 1000 meters of elevation.
   * * Note: It must be paired with recuperationInkWhPerkmAltitudeLoss.
   * * Note: It cannot be used with accelerationEfficiency, decelerationEfficiency, uphillEfficiency
   * or downhillEfficiency.
   *
   * Minimum value: recuperationInkWhPerkmAltitudeLoss
   * Maximum value: 500.0
   *
   * @attribute consumptionInkWhPerkmAltitudeGain
   * @param {Number} [options.consumptionInkWhPerkmAltitudeGain] Electric energy in kWh
   */
  consumptionInkWhPerkmAltitudeGain?: number;

  /**
   * If vehicleAdrTunnelRestrictionCode is specified, the vehicle is subject to ADR tunnel restrictions.
   * * Vehicles with code B are restricted from roads with ADR tunnel categories B, C, D, and E.
   * * Vehicles with code C are restricted from roads with ADR tunnel categories C, D, and E.
   * * Vehicles with code D are restricted from roads with ADR tunnel categories D and E.
   * * Vehicles with code E are restricted from roads with ADR tunnel category E.
   * * If vehicleAdrTunnelRestrictionCode is not specified, no ADR tunnel restrictions apply.
   *
   * Notes:
   * * If travelMode is pedestrian or bicycle, vehicleAdrTunnelRestrictionCode is not considered.
   * * The vehicleAdrTunnelRestrictionCode and vehicleLoadType parameters are independent; please
   * provide both if applicable.
   *
   * @attribute vehicleAdrTunnelRestrictionCode
   * @param {String} [options.vehicleAdrTunnelRestrictionCode] An ADR restriction code
   */
  vehicleAdrTunnelRestrictionCode?: string;
  };

  type CalculateRouteOptions = CommonRoutingParameters & {
    /**
     * An array of country codes.
     *
     * List of 3-character ISO 3166-1 alpha-3 country codes of countries in which
     * toll roads with vignettes are allowed.
     * Specifying allowVignette with some countries X is equivalent to specifying
     * avoidVignette with all countries but X.
     * Specifying allowVignette with an empty list is the same as avoiding all toll roads with vignettes.
     * It is an error to specify both avoidVignette and allowVignette.
     * @default None
     */
    allowVignette?: string | string[];

    /**
     * The type of the alternative route.
     *
     * Specifies whether to compute alternatives
     * with the objective to find routes that are significantly different,
     * or whether to look for routes better than the reference route. Possible values are:
     * anyRoute: compute alternative routes that are significantly different from the reference route.
     * betterRoute: return an alternative route only if it is better than the reference
     * route according to the given planning criteria.
     * If there is a road block on the reference route,
     * then any alternative that does not contain blockages is considered as a better route.
     * Can only be used when reconstructing a route.
     * @default None
     */
    alternativeType?: string;

    /**
     * The properly formatted date with a time value. Date cannot be in the past
     * and has to follow ISO 8601 standard.
     *
     * The date and time of arrival at the destination point.
     * It must be specified as a dateTime.
     * When a time zone offset is not specified it will be assumed to be that of the destination point.
     * The arriveAt value must be in the future. The arriveAt parameter cannot be used in conjunction with
     * departAt.
     * @default None
     */
    arriveAt?: string;

    /**
     * Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters
     * per hour. It can be used to specify consumption due to devices and systems such as AC systems, radio,
     * heating, etc.
     * @default None
     */
    auxiliaryPowerInLitersPerHour?: number;

    /**
     * A list of shapes to avoid for planning routes.
     *
     * A list of shapes to avoid for planning routes. Supported shapes include rectangles.
     * Can contain one of each supported shapes element.
     *
     *
     * Example
     * tt.services.calculateRoute({
     * locations: '4.91015,52.37173:4.898046255,52.36357',
     * avoidAreas: [{
     * southWestCorner: {latitude: 52.36391, longitude:4.90106},
     * northEastCorner: {latitude: 52.36554, longitude:4.90767}
     * }]);
     * Supported point formats:
     * 'lat,lon'
     * {lat:111, lon:111}
     * {lat:111, lng:111}
     * {latitude:111, longitude:111}
     * {x:111, y:111}
     * {lat: function(), lng:function()}
     * @default None
     */
    avoidAreas?: Object[];

    /**
     * An array of country codes.
     *
     * List of 3-character ISO 3166-1 alpha-3 country codes of countries in which
     * all toll roads with vignettes are to be avoided.
     * Toll roads with vignettes in countries not in the list are unaffected.
     * It is an error to specify both avoidVignette and allowVignette.
     * @default None
     */
    avoidVignette?: string | string[];

    /**
     * A flag to reorder the route waypoints to reduce the route length.
     *
     * Reorders the route waypoints to reduce
     * the route length. Yields best results when used in conjunction with routeType shortest. Possible values:
     * true (compute a better order, if possible; not allowed to be used in conjunction with a
     * maxAlternatives value greater than 0; not allowed to be used in conjunction with circle waypoints).
     * The response will include the optimized waypoint indices. This feature can be used with a maximum of
     * 20 route waypoints.
     * false (use the locations in the given order). Not allowed to be used in conjunction with
     * routeRepresentation none.
     * @default None
     */
    computeBestOrder?: boolean;

    /**
     * Colon-delimited list of
     * ElectricConstantSpeedConsumptionPairs, e.g., an array of such pairs "60,7".
     *
     * Specifies the speed-dependent component of consumption.
     * Provided as an unordered list of speed/consumption-rate pairs. The list defines points
     * on a consumption curve.
     * Consumption rates for speeds not in the list are found as follows:
     * By linear interpolation, if the given speed lies in between two speeds in the list.
     * By linear extrapolation otherwise, assuming a constant (ΔConsumption/ΔSpeed) determined by
     * the nearest two points in the list.
     * The list must contain between 1 and 25 points (inclusive), and may not contain duplicate points
     * for the same speed. If it only contains a single point, then the consumption rate of that point
     * is used without further processing. Consumption specified for the largest speed must be greater
     * than or equal to that of the penultimate highest speed.
     * This ensures that extrapolation does not lead to negative consumption rates.
     * Similarly, consumption values specified for the two lowest speeds in the list cannot lead to a
     * negative consumption rate for any lower speed.
     * The minimum and maximum values described here refer to the valid range for the consumption values
     * (expressed in kWh/100km).
     * @default None
     */
    constantSpeedConsumptionInkWhPerHundredkm?: string | string[];

    /**
     * Setting _all_ provides additional information regarding travel
     * times.
     *
     * Specifies whether to return additional travel times using different types of traffic information (none,
     * historic, live) as well as the default best-estimate travel time. Possible values:
     * none - do not compute additional travel times.
     * all - compute travel times for all types of traffic information. Specifying all results in the fields
     * noTrafficTravelTimeInSeconds, historicTrafficTravelTimeInSeconds and
     * liveTrafficIncidentsTravelTimeInSeconds being included in the summaries in the route response.
     * @default None
     */
    computeTravelTimeFor?: "none" | "all";

    /**
     * Colon-delimited list of
     * CombustionConstantSpeedConsumptionPairs, e.g., an array of such pairs "60,7".
     *
     * Specifies the speed-dependent component of consumption.
     * Provided as an unordered list of speed/consumption-rate pairs. The list defines points on a
     * consumption curve.
     * Consumption rates for speeds not in the list are found as follows:
     * By linear interpolation, if the given speed lies in between two speeds in the list.
     * By linear extrapolation otherwise, assuming a constant (ΔConsumption/ΔSpeed) determined by
     * the nearest two points in the list.
     * The list must contain between 1 and 25 points (inclusive), and may not
     * contain duplicate points for the same speed. If it only contains a single point,
     * then the consumption rate of that point is used without further processing.
     * Consumption specified for the largest speed must be greater than or equal to that of the
     * penultimate highest speed. This ensures that extrapolation does not lead to negative consumption rates.
     * Similarly, consumption values specified for the two lowest speeds in the list cannot lead to a
     * negative consumption rate for any smaller speed.
     * The minimum and maximum values described here refer to the valid range for the consumption values
     * (expressed in l/100km).
     * @default None
     */
    constantSpeedConsumptionInLitersPerHundredkm?: string | string[];

    /**
     * Specifies the current supply of fuel in liters.
     * @default None
     */
    currentFuelInLiters?: number;

    /**
     * Specifies the current electric energy supply in kilowatt hours (kWh).
     * @default None
     */
    currentChargeInkWh?: number;

    /**
     * Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
     * It is used in conjunction with the *Efficiency parameters for conversions between saved
     * or consumed energy and fuel.
     * For example, energy density is 34.2 MJ/l for gasoline, and 35.8 MJ/l for Diesel fuel.
     * @default None
     */
    fuelEnergyDensityInMJoulesPerLiter?: number;

    /**
     * The level of hilliness on a thrilling route.
     *
     * Degree of hilliness for thrilling route. Possible values: low, normal, high.
     * This parameter can only be used in conjunction with routeType thrilling.
     * @default None
     */
    hilliness?: "low" | "normal" | "high";

    /**
     * If a street number is sent in along with the request, the response
     * may include the side of the street (Left/Right) and also an offset position for that street number.
     *
     * If specified, guidance instructions will be returned (if available).
     * Possible values:
     * coded : returns raw instruction data without human-readable messages.
     * text : returns raw instructions data with human-readable messages in plain text.
     * tagged : returns raw instruction data with tagged human-readable messages to permit formatting.
     * Note that the instructionsType parameter cannot be used in conjunction with routeRepresentation=none.
     * If alternative routes are requested, instructions will be generated for each route returned.
     * @default None
     */
    instructionsType?: "coded" | "text" | "tagged";

    /**
     * The language value.
     *
     * The language parameter determines the language of the guidance messages. It does not affect proper nouns
     * (the names of streets, plazas, etc.) It has no effect when instructionsType=coded. Allowed values are (a
     * subset of) the IETF language tags described here. The currently supported languages are listed in the
     * supported languages section:
     * Routing supported languages
     * @default None
     */
    language?: string;

    /**
     * To restrict the maximum alternative routes to be calculated.
     *
     * The number of desired alternative routes to be calculated. The value provided:
     * Must be an integer in the range 0-5.
     * Using a value greater than 0 in conjunction with computeBestOrder set to true is not allowed.
     * Fewer alternative routes may be returned if either fewer alternatives exist or the requested number of
     * alternatives is larger than the service can calculate. The default value is 0, the maximum value is 5.
     * @default None
     */
    maxAlternatives?: number;

    /**
     * Specifies the maximum electric energy supply in kilowatt hours (kWh) that may be stored in
     * the vehicle's battery.
     * @default None
     */
    maxChargeInkWh?: number;

    /**
     * Meters represented as a positive integer number.
     *
     * Defines at least how far in meters the alternative routes have to follow the reference route.
     * This option cannot be used in conjunction with arriveAt.
     * @default None
     */
    minDeviationDistance?: number;

    /**
     * Seconds represented as a positive integer number.
     *
     * Defines at least how far in time (seconds) the alternative routes have to follow the reference route.
     * This option cannot be used in conjunction with arriveAt.
     * @default None
     */
    minDeviationTime?: number;

    /**
     * Protocol type, one of http or https.
     *
     * Represents the type of protocol used to perform the service call.
     * @default None
     */
    protocol?: "http" | "https";

    /**
     * Allows the routing response to omit the actual route and give only
     * the best ordered waypoints.
     *
     * Specifies the representation of the set of routes provided as a response. Possible values:
     * polyline includes routes in the response.
     * none includes only the optimized waypoint indices but does not include the routes in the response.
     * This parameter value can only be used in conjunction with computeBestOrder 'true'.
     * @default None
     */
    routeRepresentation?: "polyline" | "none";

    /**
     * The route type to be used during route calculation.
     *
     * The type of route requested. Notes on specific values:
     * fastest returns the fastest route.
     * shortest returns the shortest route by distance.
     * eco routes balance economy and speed.
     * thrilling routes include interesting or challenging roads and use as few motorways as possible.
     * You can choose the level of turns included and also the degree of hilliness. See the hilliness and
     * windingness parameters to see how to set this. There is a limit of 900km on routes planned with
     * routeType=thrilling.
     * The default value is fastest.
     * @default None
     */
    routeType?: "fastest" | "shortest" | "eco" | "thrilling";

    /**
     * Supporting points for route calculation.
     *
     * Can be used to set supporting points for constructing (or reconstructing) a route and for
     * calculating alternative routes to a base route. The provided sequence of supporting points
     * is used as input for route reconstruction.
     * Pseudo examples:
     * If the base route is A > B and we include a supporting point C, the result will be A > C > B;
     * Supporting points can be used to entirely reconstruct a route you previously had:
     * Let us illustrate the problem. To go from A > B you received A > C > D > E > B. If later, you try to generate
     * the same route (A > B), you might get different middle points. So, if you need to generate the exact same route
     * you previously had, you can do something like `calculateRoute({ locations: [A, B], supportingPoints: [C, D, E])`.
     * You can use one of the following input formats to define the supporting points:
     * String: '4.8,52.3' or '4.8,52.3:4.87,52.37'
     * String[]: ['4.8,52.3:4.87,52.37', '4.8,52.3:4.87,52.37']
     * Object: {lat: 52.3, lon: 4.8} or {lat: 53.3, lng: 5.8} or {x: 53.3, y: 5.8} or {latitude: 53.3, longitude: 5.8}
     * Object[]: [{lat: 52.3, lon: 4.8}] or [{lat: 53.3, lng: 5.8}]
     * How 'Supporting Points' differ from 'Waypoints'? - Waypoints are points where the calculated route will go through, but
     * the resulting route might be different from search to search. The waypoints order might not necessarilly be respected
     * when calculating the best route. Finally, there is a limit to the number of waypoints you can use in a route calculation.
     * Supporting points can be used to entirely contruct a previous route, or parts of it, using the previously generated points.
     * This means that there is no limit to the number of points, and the order of these points will be respected..</br></br>
     *
     * <b>Note:</b> Please keep in mind, that `supportingPoints` and 'Waypoints' (meaning more than two `locations`) are mutually
     * exclusive. If you are using `supportingPoints` you can use only two `locations`.
     *
     * For more information please refer to the [Routing API Docs](CALCULATE_ROUTE_URL)
     * Example
     * tt.services.routing({
     * locations: '4.8,52.3:4.87,52.37',
     * supportingPoints: ['-7.164026,39.319843', '-6.16632,39.342266']
     * })
     * .then(function(routeGeoJson) {
     * console.log(routeGeoJson);
     * });
     * @default None
     */
    supportingPoints?: LngLatRequestParam | LngLatRequestParam[];

    /**
     * The primary means of transportation to be used while routing.
     *
     * The travel mode for the requested route.
     * Possible values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian
     * Note that the requested travelMode may not be available for the entire route. Where
     * the requested travelMode is not available for a particular section, the element of the
     * response for that section will be 'other'.
     * @default None
     */
    travelMode?: TravelMode;

    /**
     * The array of truck cargo classification.
     *
     * Types of cargo that may be classified as hazardous materials and restricted from some roads. Available
     * vehicleLoadType values are US Hazmat classes 1 through 9, plus generic classifications for use in other
     * countries.
     * Use these for routing in US
     * USHazmatClass1 Explosives
     * USHazmatClass2 Compressed gas
     * USHazmatClass3 Flammable liquids
     * USHazmatClass4 Flammable solids
     * USHazmatClass5 Oxidizers
     * USHazmatClass6 Poisons
     * USHazmatClass7 Radioactive
     * USHazmatclass8 Corrosives
     * USHazmatClass9 Miscellaneous
     * Use these for routing in all other countries
     * otherHazmatExplosive Explosives
     * otherHazmatGeneral Miscellaneous
     * otherHazmatHarmfulToWater Harmful to water
     * This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleLoadType?: string | string[];

    /**
     * The vehicle engine type.
     *
     * Engine type of the vehicle. This parameter is currently only considered for travelMode truck. Valid
     * options are: combustion, electric
     * @default None
     */
    vehicleEngineType?: "combustion" | "electric";

    /**
     * The level of windingness on a thrilling route.
     *
     * Level of turns for thrilling route. Possible values: low, normal, high.
     * This parameter can only be used in conjunction with routeType thrilling.
     * @default None
     */
    windingness?: "low" | "normal" | "high";
  };

  type LongDistanceEvRoutingOptions = CommonRoutingParameters & {
    /**
     * A non-empty list of at most 10 chargingModes, which the vehicle is
     * able to use to charge. Each chargingConnection appears in at most one chargingMode.
     */
    chargingModes: ChargingMode[];

    /**
     * Colon-delimited list of
     * ElectricConstantSpeedConsumptionPairs, e.g., an array of such pairs "60,7".
     *
     * Specifies the speed-dependent component of consumption.
     * Provided as an unordered list of speed/consumption-rate pairs. The list defines points
     * on a consumption curve.
     * Consumption rates for speeds not in the list are found as follows:
     * By linear interpolation, if the given speed lies in between two speeds in the list.
     * By linear extrapolation otherwise, assuming a constant (ΔConsumption/ΔSpeed) determined by
     * the nearest two points in the list.
     * The list must contain between 1 and 25 points (inclusive), and may not contain duplicate points
     * for the same speed. If it only contains a single point, then the consumption rate of that point
     * is used without further processing. Consumption specified for the largest speed must be greater
     * than or equal to that of the penultimate highest speed.
     * This ensures that extrapolation does not lead to negative consumption rates.
     * Similarly, consumption values specified for the two lowest speeds in the list cannot lead to a
     * negative consumption rate for any lower speed.
     * The minimum and maximum values described here refer to the valid range for the consumption values
     * (expressed in kWh/100km).
     * @default None
     */
    constantSpeedConsumptionInkWhPerHundredkm: string | string[];

    /**
     * Specifies the current electric energy supply in kilowatt hours (kWh).
     * @default None
     */
    currentChargeInkWh: number;

    /**
     * Specifies the maximum electric energy supply in kilowatt hours (kWh) that may be stored in
     * the vehicle's battery.
     * @default None
     */
    maxChargeInkWh: number;

    /**
     * The battery level upon arrival at the destination
     * of the resulting route will be at least this much.
     * *Maximum value:* `maxChargeInkWh`
     */
    minChargeAtDestinationInkWh: number;

    /**
     * The battery level upon arrival at each intermediate charging
     * stop of the resulting route will be at least this much.
     * *Maximum value:* `0.2 × maxChargeInkWh`
     */
    minChargeAtChargingStopsInkWh: number;

    /**
     * The vehicle engine type.
     *
     * Engine type of the vehicle. The only valid options is `electric`.
     * @default None
     */
    vehicleEngineType: "electric";

    /**
     * Specifies the amount of power consumed for sustaining auxiliary systems in kilowatts (kW).
     * It can be used to specify consumption due to devices and systems such as AC systems, radio, heating, etc.
     * @default None
     */
    auxiliaryPowerInkW?: number;
  }

  /**
   * Contains chargingConnections and a chargingCurve that describes the
   * charging behavior of the vehicle using the specified charging connections.
   */
  type ChargingMode = {
    /**
     * A non-empty list of at most 20 unique chargingConnections which
     * result in the same charging curve.
     */
    chargingConnections?: ChargingConnection[];
    /**
     * A piecewise-linear function which maps a target charge level to the time it takes
     * to charge an empty battery to this level, that is used to compute charging times of the vehicle.
     *
     * * It is given by a sequence of at most 10 non-duplicate `chargingCurveSupportPoints` that are totally,
     * increasingly ordered in `timeToChargeInSeconds` and `chargeInkWh`.
     * * The last `chargeInkWh` is `maxChargeInkWh`.
     * * The curve is given by connecting the given points in order after adding the first point:
     *
     *`{
     * "chargeInkWh" : 0.0,
     * "timeToChargeInSeconds" : 0
     *}`
    */
    chargingCurve: ChargingCurveSupportPoint[];
  };

  /**
   * A supporting point of a charging curve consisting of `chargeInkWh`
   * and `timeToChargeInSeconds` such that the time it takes to charge the battery from `0` kWh to `chargeInkWh` kWh
   * is given by `timeToChargeInSeconds`.
   */
  type ChargingCurveSupportPoint = {
    /**
     * A battery charge level in kWh. A float in the range (0, `maxChargeInkWh`].
     */
    chargeInkWh?: number;
    /**
     * A time span in seconds. A non-negative integer.
     */
    timeToChargeInSeconds?: number;
  }
  type GeoJsonRouteProperties = {
    sections: RouteSection[],
    segmentSummary: RouteSummary[],
    summary: RouteSummary,
    guidance?: Guidance
  };

  type GeoJsonRouteSectionProperties = {
    sectionType: string,
    travelMode?: string,
    countryCode?: string,
    simpleCategory?: string,
    effectiveSpeedInKmh?: number,
    magnitudeOfDelay?: number,
    delayInSeconds?: number,
    tec?: Object
  };

  type CalculateRouteResponse = GenericServiceResponse & CalculateRouteResult & {
    toGeoJson(): GeoJSON.FeatureCollection<LineString | MultiLineString, GeoJsonRouteProperties>;
    toRouteSectionsCollection(): GeoJSON.FeatureCollection<LineString, GeoJsonRouteSectionProperties>[];
    getTrackingId(): string;
  };

  type TrafficFlowSegmentDataOptions = {
    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Specifies if the Response includes OpenLR code.
     * @default None
     */
    openLr?: boolean;

    /**
     * Coordinates of the point close to the road segment.
     * They have to be comma-separated and calculated using the EPSG4326 projection.
     * @default None
     */
    point: string;

    /**
     * The type of flow data to be displayed on the tile. Available options: absolute,
     * relative, and relative-delay.
     * @default None
     */
    style: "absolute" | "relative" | "relative-delay";

    /**
     * The segment width multiplier. Value should be in the range from 1 to 20.
     * @default None
     */
    thickness?: number;

    /**
     * Unit of speed. Avilable values: KMPH and MPH.
     * @default None
     */
    unit?: "KMPH" | "MPH";

    /**
     * Zoom level. This will affect traffic incident coordinates
     * to separately present both road sides. Should be in the range from 0 to 18.
     * @default None
     */
    zoom: number;
  };

  type TrafficFlowSegmentDataResponse = {
    /**
     * Main response element.
     */
    flowSegmentData?: FlowSegmentData;

    /**
     * Returns the value of `Tracking-ID` response header.
     */
    getTrackingId(): string;
  }

  type FlowSegmentData = {
    /**
     * Functional Road Class. This indicates the road type:
     * * FRC0: Motorway, freeway or other major road
     * * FRC1: Major road, less important than a motorway
     * * FRC2: Other major road
     * * FRC3: Secondary road
     * * FRC4: Local connecting road
     * * FRC5: Local road of high importance
     * * FRC6: Local road
     */
    frc?: 'FRC0'|'FRC1'|'FRC2'|'FRC3'|'FRC4'|'FRC5'|'FRC6';

    /**
     * The current average speed at the selected `point`, in the `unit` requested.
     * This is calculated from the `currentTravelTime` and the length of the selected segment.
     */
    currentSpeed?: number;

    /**
     * The free flow speed expected under ideal conditions, expressed in the `unit` requested.
     * This is related to the `freeFlowTravelTime`.
     */
    freeFlowSpeed?: number;

    /**
     * Current travel time in seconds based on fused real-time measurements
     * between the defined locations in the specified direction.
     */
    currentTravelTime?: number;

    /**
     * The travel time in seconds which would be expected under ideal free flow conditions.
     */
    freeFlowTravelTime?: number;

    /**
     * The confidence is a measure of the quality of the provided travel time and speed.
     * * A value ranges between `0` and `1` where `1` means full confidence,
     * meaning that the Response contains the highest quality data.
     * * Lower values indicate the degree that the Response may vary from the actual conditions on the road.
     */
    confidence?: number;

    /**
     * This includes the coordinates describing the shape of the segment.
     * Coordinates are shifted from the road depending on the zoom level
     * to support high quality visualization in every scale.
     */
    coordinates?: FlowSegmentDataCoordinates;

    /**
     * The {@link http://www.openlr.org/|OpenLR} code for segment.
     */
    openlr?: string;

    /**
     * This indicates if the road is closed to traffic or not.
     */
    roadClosure?: boolean;

    /**
     * This indicates the software version that generated the response.
     */
    '@version'?: string;
  }

  type FlowSegmentDataCoordinates = {
    coordinate?: {
      lng?: number;
      lat?: number;
    }[];
  }

  type StructuredGeocodeOptions = {
    /**
     * Defines whether the geocode service should return the best result.
     *
     * It makes the service instances to return only one result, the best match result.
     * This option overwrites both limit and offset parameters. It changes the response from an array to a single
     * result.
     * @default false
     */
    bestResult?: boolean;

    /**
     * The two-letter code of the country being targeted. Required parameter.
     *
     * @default None
     */
    countryCode: string;

    /**
     * The county's name.
     *
     * Represents the county's name for the structured address.
     * @default None
     */
    countrySecondarySubdivision?: string;

    /**
     * The state or province.
     *
     * Represents the state or province's name for the structured address.
     * @default None
     */
    countrySubdivision?: string;

    /**
     * The name of the area.
     *
     * Represents the area's name for the structured address.
     * @default None
     */
    countryTertiarySubdivision?: string;

    /**
     * The cross street's name.
     *
     * Represents the cross street's name for the structured address.
     * @default None
     */
    crossStreet?: string;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Language code that decides in which language the results
     * should be returned.
     *
     * The value should correspond to one of the supported IETF language codes.
     * The list is available here.
     * The code is case insensitive.
     * @default null
     */
    language?: string;

    /**
     * The maximum number of responses that will be returned.
     *
     * Represents the maximum number of responses that will be returned per request.
     * The maximum value is 100.
     * @default 10
     */
    limit?: number;

    /**
     * Enables the return of a comma-separted mapcodes list.
     * It can also filter the response to only show selected mapcode types. See Mapcodes in the response.
     * Values: One or more of:
     * * `Local`
     * * `International`
     * * `Alternative`
     *
     * A mapcode represents a specific location, to within a few meters.
     * Every location on Earth can be represented by a mapcode. Mapcodes are designed to be short,
     * easy to recognize, remember, and communicate. Visit the Mapcode project website for more information.
     */
    mapcodes?: string | string[];

    /**
     * The municipality's name (city/town).
     *
     * Represents the municipality (city/town) for the structured address.
     * @default None
     */
    municipality?: string;

    /**
     * The municipality subdivision (sub/super city).
     *
     * Represents the municipality subdivision (sub/super city) for the structured address.
     * @default None
     */
    municipalitySubdivision?: string;

    /**
     * A positive integer value.
     *
     * Use this option if you want to apply an offset to the results returned by the
     * Search API service.
     * It makes use of the ofs parameter which allows paginated results when used with the
     * limit option.
     * The maximum value is 1900.
     * @default None
     */
    offset?: number;

    /**
     * The zip or postal code.
     *
     * Represents the zip code or postal code for the structured address.
     * @default None
     */
    postalCode?: string;

    /**
     * The protocol type to be used in the calls.
     *
     * Represents the type of protocol used to perform a service call.
     * @default "https"
     */
    protocol?: "http" | "https";

    /**
     * The street's name.
     *
     * Represents the street's name for the structured address.
     * @default None
     */
    streetName?: string;

    /**
     * The street's number.
     *
     * Represents the street's number for the structured address.
     * @default None
     */
    streetNumber?: string;

    /**
     * This option is used to indicate the mode in which the timeZone object should be returned.
     * The only available option is 'iana' - mode that shows the IANA ID which allows the user
     * to determine the current time zone for the POI.
     */
    timeZone?: "iana";

    /**
     * Indexes for which extended postal codes should be included in the results.
     *
     * By default, extended postal codes are included for all indexes except geographies because extended
     * postal code lists for geographies can be quite long, so they have to be explicitly requested when needed.
     *
     * Availability is region-dependent.
     *
     * It accepts a comma-separated list of index types.
     * Predefined indexes are: Addr, Geo, PAD, POI, Str and Xstr
     */
    extendedPostalCodesFor?: string;

    /**
     * An array or comma-separated list of entity types which can be used to restrict the result to the Geography
     * result of a specific entity type. If entityTypeSet is specified, only a Geography result
     * with a proper entity type will be returned.
     *
     * - Item order in the list does not matter.
     * - Values are case sensitive.
     *
     * Available values:
     * - `Country`
     * - `CountrySubdivision`
     * - `CountrySecondarySubdivision`
     * - `CountryTertiarySubdivision`
     * - `Municipality`
     * - `MunicipalitySubdivision`
     * - `Neighbourhood`
     * - `PostalCodeArea`
     *
     * @default None
     */
    entityTypeSet?: EntitTypeSet;
  };

  type AdditionalDataOptions = {
    /**
     * An array of geometries IDs.
     *
     * This option specifies an array of geometries IDs. IDs can be retrieved from the
     * response returned by search service, e.g., fuzzySearch.
     * @default None
     */
    geometries?: string[];

    /**
     * Geometries zoom value. Must be an integer in range of 0-22 (inclusive).
     *
     * To see table of precision per zoom value, please refer to:
     * Search API documentation.
     * @default None
     */
    geometriesZoom?: number;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;
  };

  type AutocompleteOptions = {
    /**
     * Longitude and latitude data in one of the supported formats.
     *
     * This option represents a geographic coordinate.
     * The supported formats are listed below:
     * Maps.LngLat The Class instance.
     * [0, 0] A one-dimensional array with two indexes for longitude and latitude respectively.
     * ["0", "0"] A one-dimensional array with two indexes for longitude and latitude respectively.
     * "0,1" A string with longitude and latitude divided by a comma.
     * {lng: Function, lat: Function} An object with two functions returning longitude and latitude.
     * {lon: 0, lat: 1} An object with two keys: lat and lon.
     * {lng: 0, lat: 1} An object with two keys: lat and lng.
     * {x: 0, y: 1} An object with two keys: x as longitude and y as latitude.
     * {longitude: 0, latitude: 1} An object with two keys: longitude and latitude.
     * Note: Supplying the center without a radius will bias search results only to
     * that area.
     * @default None
     */
    center?: LngLatRequestParam;

    /**
     * Comma separated list of country codes (e.g.: FR,ES)
     *
     * This option is a list of country codes used to limit the search request to those specific political limits.
     * @default None
     */
    countrySet?: string;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Language code that decides in which language the search results
     * should be returned.
     *
     * The value should correspond to one of the supported IETF language codes.
     * The list is available here.
     * The code is case insensitive.
     * @default None
     */
    language: string;

    /**
     * The maximum number of responses that will be returned.
     *
     * Represents the maximum number of responses that will be returned per request.
     * The maximum value is 100.
     * @default 10
     */
    limit?: number;

    /**
     * The query string. This value will be properly encoded during the creation
     * of the request.
     *
     * This option represents the text that will be searched.
     * @default None
     */
    query?: string;

    /**
     * A positive integer value in meters.
     *
     * This option specifies the search radius in meters using the coordinates given to the center
     * option as origin.
     * @default None
     */
    radius?: number;

    /**
     * Restricts the result space based on their segment types.
     *
     * A result is only included if at least one segment is of any of the indicated types.
     * Value: A comma-separated list that consists of the types of segments.
     * Usage examples:
     * resultSet=category
     * resultSet=brand
     * resultSet=category,brand
     * @default None
     */
    resultSet?: string;
  };

  type CalculateReachableRangeOptions = {
    /**
     * Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the
     * vehicle accelerates (i.e., KineticEnergyGained/ChemicalEnergyConsumed).
     * ChemicalEnergyConsumed is obtained by converting consumed fuel to chemical energy using
     * fuelEnergyDensityInMJoulesPerLiter.
     * @default None
     */
    accelerationEfficiency?: number;

    /**
     * An array of country codes.
     *
     * List of 3-character ISO 3166-1 alpha-3 country codes of countries in which
     * toll roads with vignettes are allowed.
     * Specifying allowVignette with some countries X is equivalent to specifying
     * avoidVignette with all countries but X.
     * Specifying allowVignette with an empty list is the same as avoiding all toll roads with vignettes.
     * It is an error to specify both avoidVignette and allowVignette.
     * @default None
     */
    allowVignette?: string | string[];

    /**
     * The properly formatted date with a time value. Date cannot be in the past
     * and has to follow ISO 8601 standard.
     *
     * The date and time of arrival at the destination point.
     * It must be specified as a dateTime.
     * When a time zone offset is not specified it will be assumed to be that of the destination point.
     * The arriveAt value must be in the future. The arriveAt parameter cannot be used in conjunction with
     * departAt.
     * @default None
     */
    arriveAt?: string;

    /**
     * Specifies the amount of power consumed for sustaining auxiliary systems in kilowatts (kW).
     * It can be used to specify consumption due to devices and systems such as AC systems, radio, heating, etc.
     * @default None
     */
    auxiliaryPowerInkW?: number;

    /**
     * Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters
     * per hour. It can be used to specify consumption due to devices and systems such as AC systems, radio,
     * heating, etc.
     * @default None
     */
    auxiliaryPowerInLitersPerHour?: number;

    /**
     * Specifies something that the route calculation should try to avoid when
     * determining the route.
     *
     * Specifies something that the route calculation should try to avoid when determining the route. Can be
     * specified multiple times. Possible values:
     * tollRoads: avoids toll roads.
     * motorways: avoids motorways.
     * ferries: avoids ferries.
     * unpavedRoads: avoids unpaved roads.
     * carpools: avoids routes that require use of a carpool (HOV/ High Occupancy Vehicle) lanes.
     * alreadyUsedRoads: avoids using the same road multiple times.
     * Most useful in conjunction with routeType=thrilling.
     * @default None
     */
    avoid?: Avoidable | Avoidable[];

    /**
     * A list of shapes to avoid for planning routes.
     *
     * A list of shapes to avoid for planning routes. Supported shapes include rectangles.
     * Can contain one of each supported shapes element.
     *
     *
     * Example
     * tt.services.calculateRoute({
     * locations: '4.91015,52.37173:4.898046255,52.36357',
     * avoidAreas: [{
     * southWestCorner: {latitude: 52.36391, longitude:4.90106},
     * northEastCorner: {latitude: 52.36554, longitude:4.90767}
     * }]);
     * Supported point formats:
     * 'lat,lon'
     * {lat:111, lon:111}
     * {lat:111, lng:111}
     * {latitude:111, longitude:111}
     * {x:111, y:111}
     * {lat: function(), lng:function()}
     * @default None
     */
    avoidAreas?: Object[];

    /**
     * An array of country codes.
     *
     * List of 3-character ISO 3166-1 alpha-3 country codes of countries in which
     * all toll roads with vignettes are to be avoided.
     * Toll roads with vignettes in countries not in the list are unaffected.
     * It is an error to specify both avoidVignette and allowVignette.
     * @default None
     */
    avoidVignette?: string | string[];

    /**
     * Colon-delimited list of
     * CombustionConstantSpeedConsumptionPairs, e.g., an array of such pairs "60,7".
     *
     * Specifies the speed-dependent component of consumption.
     * Provided as an unordered list of speed/consumption-rate pairs. The list defines points on a
     * consumption curve.
     * Consumption rates for speeds not in the list are found as follows:
     * By linear interpolation, if the given speed lies in between two speeds in the list.
     * By linear extrapolation otherwise, assuming a constant (ΔConsumption/ΔSpeed) determined by
     * the nearest two points in the list.
     * The list must contain between 1 and 25 points (inclusive), and may not
     * contain duplicate points for the same speed. If it only contains a single point,
     * then the consumption rate of that point is used without further processing.
     * Consumption specified for the largest speed must be greater than or equal to that of the
     * penultimate highest speed. This ensures that extrapolation does not lead to negative consumption rates.
     * Similarly, consumption values specified for the two lowest speeds in the list cannot lead to a
     * negative consumption rate for any smaller speed.
     * The minimum and maximum values described here refer to the valid range for the consumption values
     * (expressed in l/100km).
     * @default None
     */
    constantSpeedConsumptionInLitersPerHundredkm?: string | string[];

    /**
     * Specifies the current supply of fuel in liters.
     * @default None
     */
    currentFuelInLiters?: number;

    /**
     * Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the
     * vehicle decelerates (i.e., ChemicalEnergySaved/KineticEnergyLost).
     * ChemicalEnergySaved is obtained by converting saved (not consumed) fuel to energy using
     * fuelEnergyDensityInMJoulesPerLiter.
     * @default None
     */
    decelerationEfficiency?: number;

    /**
     * The properly formatted date with the time or 'now' value. Date
     * cannot be in the past and has to follow ISO 8601 standard.
     *
     * The date and time of departure from the origin point.
     * Departure times, apart from now, must be specified as a dateTime.
     * When a time zone offset is not specified, it will be assumed to be that of the origin point.
     * The departAt value must be in the future. The departAt parameter cannot be used in conjunction with
     * arriveAt.
     * @default None
     */
    departAt?: string;

    /**
     * The distance budget in meters
     * that determines the maximal range which can be traveled.
     * The Consumption Model will only affect the range when routeType is eco.
     * NOTE: _exactly one_ of fuelBudgetInLiters, energyBudgetInkWh, timeBudgetInSec and
     * distanceBudgetInMeters must be set.
     * @default None
     */
    distanceBudgetInMeters: number;

    /**
     * Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the
     * vehicle loses elevation (i.e., ChemicalEnergySaved/PotentialEnergyLost).
     * ChemicalEnergySaved is obtained by converting saved (not consumed) fuel to energy using
     * fuelEnergyDensityInMJoulesPerLiter.
     * @default None
     */
    downhillEfficiency?: number;

    /**
     * Electric energy budget in
     * kilowatt hours (kWh) that determines maximal range which can be
     * traveled using the specified Electric Consumption Model.
     * NOTE: _exactly one_ of fuelBudgetInLiters, energyBudgetInkWh, timeBudgetInSec and
     * distanceBudgetInMeters must be set.
     * @default None
     */
    energyBudgetInkWh: number;

    /**
     * Fuel budget in liters that
     * determines the maximal range which can be traveled using the specified
     * Combustion Consumption Model. Required if _vehicleEngineType_ is _combustion_.
     * NOTE: _exactly one_ of fuelBudgetInLiters, energyBudgetInkWh, timeBudgetInSec and
     * distanceBudgetInMeters must be set.
     * @default None
     */
    fuelBudgetInLiters: number;

    /**
     * Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
     * It is used in conjunction with the *Efficiency parameters for conversions between saved
     * or consumed energy and fuel.
     * For example, energy density is 34.2 MJ/l for gasoline, and 35.8 MJ/l for Diesel fuel.
     * @default None
     */
    fuelEnergyDensityInMJoulesPerLiter?: number;

    /**
     * The level of hilliness on a thrilling route.
     *
     * Degree of hilliness for thrilling route. Possible values: low, normal, high.
     * This parameter can only be used in conjunction with routeType thrilling.
     * @default None
     */
    hilliness?: "low" | "normal" | "high";

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Specifies the maximum electric energy supply in kilowatt hours (kWh) that may be stored in
     * the vehicle's battery.
     * @default None
     */
    maxChargeInkWh?: number;

    /**
     * Point from which the range calculation should start.
     * The following formats are supported:
     * String (longitude/latitude pair)
     * "4.8,52.3"
     *
     * Array (longitude/latitude pair)
     * [4.8, 52.3]
     *
     * Object
     * {lon: 4.8, lat: 52.3}
     * {lng: 5.8, lat: 53.3}
     * {x: 53.3, y: 5.8}
     * {longitude: 5.8, latitude: 53.3}
     * {lng: Function, lat: Function} The functions should return a numeric value.
     * @default None
     */
    origin:
      | Record<string, string | number | Function>
      | string
      | [number, number];

    /**
     * The protocol type to be used in the calls.
     *
     * Represents the type of protocol used to perform a service call.
     * @default "https"
     */
    protocol?: "http" | "https";

    /**
     * The route type to be used during route calculation.
     *
     * The type of route requested. Notes on specific values:
     * fastest returns the fastest route.
     * shortest returns the shortest route by distance.
     * eco routes balance economy and speed.
     * thrilling routes include interesting or challenging roads and use as few motorways as possible.
     * You can choose the level of turns included and also the degree of hilliness. See the hilliness and
     * windingness parameters to see how to set this. There is a limit of 900km on routes planned with
     * routeType=thrilling.
     * The default value is fastest.
     * @default "fastest"
     */
    routeType?: "fastest" | "shortest" | "eco" | "thrilling";

    /**
     * Time budget in seconds that determines maximal
     * range which can be traveled using driving time.
     * The consumption parameters will only affect eco-routes and thereby indirectly the driving time.
     * NOTE: _exactly one_ of fuelBudgetInLiters, energyBudgetInkWh, timeBudgetInSec and
     * distanceBudgetInMeters must be set.
     * @default None
     */
    timeBudgetInSec: number;

    /**
     * The primary means of transportation to be used while routing.
     *
     * The travel mode for the requested route.
     * Possible values: car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian
     * Note that the requested travelMode may not be available for the entire route. Where
     * the requested travelMode is not available for a particular section, the element of the
     * response for that section will be 'other'.
     * @default None
     */
    travelMode?:
      | "car"
      | "truck"
      | "taxi"
      | "bus"
      | "van"
      | "motorcycle"
      | "bicycle"
      | "pedestrian";

    /**
     * Specifies the efficiency of converting chemical energy stored in fuel to potential energy
     * when the vehicle gains elevation (i.e., PotentialEnergyGained/ChemicalEnergyConsumed).
     * ChemicalEnergyConsumed is obtained by converting consumed fuel to chemical energy using
     * fuelEnergyDensityInMJoulesPerLiter.
     * @default None
     */
    uphillEfficiency?: number;

    /**
     * The vehicle axle wight in kg (kilograms).
     *
     * Weight per axle of the vehicle in kg (kilograms). A value of 0 means that weight restrictions per axle are not
     * considered during route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleAxleWeight?: number;

    /**
     * True if the vehicle is used for commercial purposes.
     *
     * The vehicle is used for commercial purposes and thus may not be allowed to drive on some roads. This
     * parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleCommercial?: boolean;

    /**
     * The vehicle engine type.
     *
     * Engine type of the vehicle. This parameter is currently only considered for travelMode truck. Valid
     * options are: combustion, electric
     * @default None
     */
    vehicleEngineType?: "combustion" | "electric";

    /**
     * The vehicle height in meters.
     *
     * Height of the vehicle in meters. A value of 0 means that height restrictions are not considered
     * during route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleHeight?: number;

    /**
     * The vehicle length in meters.
     *
     * Length of the vehicle in meters. A value of 0 means that length restrictions are not considered during
     * route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleLength?: number;

    /**
     * The array of truck cargo classification.
     *
     * Types of cargo that may be classified as hazardous materials and restricted from some roads. Available
     * vehicleLoadType values are US Hazmat classes 1 through 9, plus generic classifications for use in other
     * countries.
     * Use these for routing in US
     * USHazmatClass1 Explosives
     * USHazmatClass2 Compressed gas
     * USHazmatClass3 Flammable liquids
     * USHazmatClass4 Flammable solids
     * USHazmatClass5 Oxidizers
     * USHazmatClass6 Poisons
     * USHazmatClass7 Radioactive
     * USHazmatclass8 Corrosives
     * USHazmatClass9 Miscellaneous
     * Use these for routing in all other countries
     * otherHazmatExplosive Explosives
     * otherHazmatGeneral Miscellaneous
     * otherHazmatHarmfulToWater Harmful to water
     * This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleLoadType?: string | string[];

    /**
     * The maximal allowed vehicle speed in km/h.
     *
     * Maximum speed of the vehicle in km/hour. A value of 0 means that an appropriate value for the vehicle
     * will be determined and applied during route planning. A non-zero value may be overridden during route
     * planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleMaxSpeed?: number;

    /**
     * The vehicle weight in kg (kilograms).
     *
     * Weight of the vehicle in kg. A value of 0 means that weight restrictions are not considered during route
     * planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleWeight?: number;

    /**
     * The vehicle width in meters.
     *
     * Width of the vehicle in meters. A value of 0 means that width restrictions are not considered during
     * route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleWidth?: number;

    /**
     * The level of windingness on a thrilling route.
     *
     * Level of turns for thrilling route. Possible values: low, normal, high.
     * This parameter can only be used in conjunction with routeType thrilling.
     * @default None
     */
    windingness?: "low" | "normal" | "high";
  };

  type CalculateReachableRangeResponse = GenericServiceResponse & {
    toGeoJson(): GeoJSON.Feature<Polygon>;
    getTrackingId(): string;
  };

  type CopyrightsV2Options = {
    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;
  };

  type CopyrightsV2Response = {
    /**
     * The response body will contain copyrights in a plain text format.
     */
    data: string;

    /**
     * Returns the value of `Tracking-ID` response header.
     */
     getTrackingId(): string;
  };

  type CopyrightsCaptionV2Options = {
    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;
  };

  type CopyrightsCaptionV2Response = {
    /**
     * Copyrights caption
     */
    copyrightsCaption: string;

    /**
     * Format version of caption
     */
    formatVersion: string;

    /**
     * Returns the value of `Tracking-ID` response header.
     */
     getTrackingId(): string;
  };

  type CrossStreetLookupOptions = {
    /**
     * Format of newlines in the formatted address.
     * If true, the address will contain newlines (line breaks).
     * Otherwise, newlines will be converted to spaces.
     * @default None
     */
    allowFreeformNewline?: boolean;
    /**
     * The directional heading of the vehicle in degrees for travel along a
     * segment of roadway.
     * 0 is North, 90 is East and so on. Values range from -360 to 360. The precision can include
     * up to one decimal place.
     *
     * Makes it possible to get the address information of the road, keeping in mind the direction.
     * @default None
     */
    heading?: number;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Language code that decides in which language the results
     * should be returned.
     *
     * The value should correspond to one of the supported IETF language codes.
     * The list is available here.
     * The code is case insensitive.
     * @default null
     */
    language?: string;

    /**
     * The maximum number of responses that will be returned.
     *
     * Represents the maximum number of responses that will be returned per request.
     * The maximum value is 100.
     * @default 10
     */
    limit?: number;

    /**
     * Longitude and latitude data in one of the supported
     * formats.
     *
     * This option's value should have the location to be reverse geocoded.
     * This option is able to convert a number of popular formats into a geographic coordinate.
     * The supported formats are listed below:
     * Maps.LngLat Class instance.
     * [0, 0] A one-dimensional array with two indexes for longitude and latitude respectively.
     * ["0", "0"] A one-dimensional array with two indexes for longitude and latitude respectively.
     * "0,1" A string with longitude and latitude divided by a comma.
     * {lng: Function, lat: Function} An object with two functions returning longitude and latitude.
     * {lon: 0, lat: 1} An object with two keys: lat and lon.
     * {lng: 0, lat: 1} An object with two keys: lat and lng.
     * {x: 0, y: 1} An object with two keys: x as longitude and y as latitude.
     * {longitude: 0, latitude: 1} An object with two keys: longitude and latitude.
     * @default None
     */
    position?: LngLatRequestParam;

    /**
     * The protocol type to be used in the calls.
     *
     * Represents the type of protocol used to perform a service call.
     * @default "https"
     */
    protocol?: "http" | "https";

    /**
     * A positive integer value in meters.
     *
     * This option specifies the search radius in meters using the coordinates given to the center
     * option as origin.
     * @default None
     */
    radius?: number;

    /**
     * Geopolitical view.
     *
     * Can be one of "Unified", "AR", "IN", "PK", "IL, "MA", "RU" and "TR".
     * Legend:
     * Unified - International view
     * AR - Argentina
     * IN - India
     * PK - Pakistan
     * IL - Israel
     * MA - Morocco
     * RU - Russia
     * TR - Turkey
     * @default None
     */
    view?: View;
  };

  type GeocodeOptions = {
    /**
     * Defines whether the geocode service should return the best result.
     *
     * It makes the service instances to return only one result, the best match result.
     * This option overwrites both limit and offset parameters. It changes the response from an array to a single
     * result.
     * @default false
     */
    bestResult?: boolean;

    /**
     * Bounding box area in one of the supported formats.
     *
     * The bounding box is a limited area within the search results. If it is omitted then the
     * whole world will be taken into consideration.
     * In case the area specified exceeds the world boundaries, the following actions will be taken
     * depending on which side was exceeded:
     * Latitudes: the exceeded values will be replaced with their maximun.
     * Longitudes: The service will split the area into two (or more) valid bounding boxes, will
     * execute a search request for each one, and then merge the responses into a single result.
     * This option is able to convert a number of popular formats into the bounding box.
     * The supported formats are listed below:
     * Maps.LngLatBounds class instance
     * {minLon: 0, minLat: 0, maxLon: 1, maxLat: 1} A plain object with the keys minLon, minLat, maxLon, maxLat.
     * [0, 0, 1, 1] An array of numbers describing the bounding box following the order: minLon, minLat,
     * maxLon, maxLat.
     * [[0, 0], [1, 1]] A two-dimensional array with two indexes [southWest, northEast], each one with
     * longitude and latitude values.
     * "0,0,1,1" A comma-separated string with numbers in the order: minLon, minLat, maxLon, maxLat.
     * [{lon: 0, lat: 0},{lon: 1, lat: 1}] A one-dimensional array with two objects in the order: southWest,
     * northEast, and each object with a lat and lon key.
     * [{lng: 0, lat: 0},{lng: 1, lat: 1}] A one-dimensional array with two objects in the order: southWest,
     * northEast and each object with a lat and lon key.
     * [Maps.LngLat, Maps.LngLat] A one-dimensional array with two Maps.LngLat instances in the order: southWest and northEast.
     * @default None
     */
    boundingBox?: LngLatBoundsRequestParam;

    /**
     * Longitude and latitude data in one of the supported formats.
     *
     * This option represents a geographic coordinate.
     * The supported formats are listed below:
     * Maps.LngLat The Class instance.
     * [0, 0] A one-dimensional array with two indexes for longitude and latitude respectively.
     * ["0", "0"] A one-dimensional array with two indexes for longitude and latitude respectively.
     * "0,1" A string with longitude and latitude divided by a comma.
     * {lng: Function, lat: Function} An object with two functions returning longitude and latitude.
     * {lon: 0, lat: 1} An object with two keys: lat and lon.
     * {lng: 0, lat: 1} An object with two keys: lat and lng.
     * {x: 0, y: 1} An object with two keys: x as longitude and y as latitude.
     * {longitude: 0, latitude: 1} An object with two keys: longitude and latitude.
     * Note: Supplying the center without a radius will bias search results only to
     * that area.
     * @default None
     */
    center?: LngLatRequestParam;

    /**
     * Comma separated list of country codes (e.g.: FR,ES)
     *
     * This option is a list of country codes used to limit the search request to those specific political limits.
     * @default None
     */
    countrySet?: string;

    /**
     * An array or comma-separated list of entity types which can be used to restrict the result to the Geography
     * result of a specific entity type. If entityTypeSet is specified, only a Geography result
     * with a proper entity type will be returned.
     *
     * - Item order in the list does not matter.
     * - Values are case sensitive.
     *
     * Available values:
     * - `Country`
     * - `CountrySubdivision`
     * - `CountrySecondarySubdivision`
     * - `CountryTertiarySubdivision`
     * - `Municipality`
     * - `MunicipalitySubdivision`
     * - `Neighbourhood`
     * - `PostalCodeArea`
     *
     * @default None
     */
    entityTypeSet?: EntitTypeSet;

    /**
     * Represent the indexes for extended postal codes.
     *
     * Represent the indexes for which extended postal codes should be included in the results.
     * The available indexes codes are:
     * Addr: Address ranges
     * Geo: Geographies
     * PAD: Point Addresses
     * POI: Points of Interest
     * Str: Streets
     * XStr: Cross Streets (intersections)
     * The value should be a comma-separated list of index types (in any order) or just the string "None"
     * for no indexes.
     *
     *
     * Example
     * tomtom.geometrySearch({
     * query: 'pizza',
     * extendedPostalCodesFor: 'PAD,Addr,POI'
     * })
     * .then(handleResults);
     * The extended postal code will be returned as an extendedPostalCode property of an address.
     * @default None
     */
    extendedPostalCodesFor?: string;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Language code that decides in which language the results
     * should be returned.
     *
     * The value should correspond to one of the supported IETF language codes.
     * The list is available here.
     * The code is case insensitive.
     * @default null
     */
    language?: string;

    /**
     * The maximum number of responses that will be returned.
     *
     * Represents the maximum number of responses that will be returned per request.
     * The maximum value is 100.
     * @default 10
     */
    limit?: number;

    /**
     * Enables the return of a comma-separted mapcodes list.
     * It can also filter the response to only show selected mapcode types. See Mapcodes in the response.
     * Values: One or more of:
     * * `Local`
     * * `International`
     * * `Alternative`
     *
     * A mapcode represents a specific location, to within a few meters.
     * Every location on Earth can be represented by a mapcode. Mapcodes are designed to be short,
     * easy to recognize, remember, and communicate. Visit the Mapcode project website for more information.
     */
    mapcodes?: string;

    /**
     * A positive integer value.
     *
     * Use this option if you want to apply an offset to the results returned by the
     * Search API service.
     * It makes use of the ofs parameter which allows paginated results when used with the
     * limit option.
     * The maximum value is 1900.
     * @default None
     */
    offset?: number;

    /**
     * The protocol type to be used in the calls.
     *
     * Represents the type of protocol used to perform a service call.
     * @default "https"
     */
    protocol?: "http" | "https";

    /**
     * The query string. This value will be properly encoded during the creation
     * of the request.
     *
     * This option represents the text that will be searched.
     * @default None
     */
    query?: string;

    /**
     * A positive integer value in meters.
     *
     * This option specifies the search radius in meters using the coordinates given to the center
     * option as origin.
     * @default None
     */
    radius?: number;

    /**
     * Enables or disables the option.
     *
     * If this option is enabled, the query will be interpreted as a partial input and the search will enter
     * predictive mode.
     * @default false
     * @deprecated This parameter will be withdrawn following a 12 months deprecation period.
     * The planned withdrawal period is February 20, 2024. After this date using it will have no effect.
     */
    typeahead?: boolean;

    /**
     * This option is used to indicate the mode in which the timeZone object should be returned.
     * The only available option is 'iana' - mode that shows the IANA ID which allows the user
     * to determine the current time zone for the POI.
     */
    timeZone?: "iana";
  };

  type IncidentCategories = "Unknown" | "Accident" | "Fog" | "Dangerous Conditions" |
    "Rain" | "Ice" | "Jam" | "Lane Closed" | "Road Closed" | "Road Works"|
    "Wind" | "Flooding" | "Detour" | "Cluster" | "Broken down vehicle";

  type IncidentSeverity = "unknown" | "minor" | "moderate" | "major" | "undefined";

  type incidentDetailsV5Options = {
    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

     /**
     * Bounding box area in one of the supported formats. The bounding box is a limited area within the search results.
     * 
     * Maximum area of bounding box is 10000km2.
     * 
     * This option is able to convert a number of popular formats into the bounding box.
     * The supported formats are listed below:
     * * `Maps.LngLatBounds` class instance
     * * `{minLon: 0, minLat: 0, maxLon: 1, maxLat: 1}` A plain object with the keys minLon, minLat, maxLon, maxLat.
     * * `[0, 0, 1, 1]` An array of numbers describing the bounding box following the order: minLon, minLat,
     * maxLon, maxLat.
     * * `[[0, 0], [1, 1]]` A two-dimensional array with two indexes [southWest, northEast], each one with
     * longitude and latitude values.
     * * `"0,0,1,1"` A comma-separated string with numbers in the order: minLon, minLat, maxLon, maxLat.
     * * `[{lon: 0, lat: 0},{lon: 1, lat: 1}]` A one-dimensional array with two objects in the order: southWest,
     * northEast, and each object with a lat and lon key.
     * * `[{lng: 0, lat: 0},{lng: 1, lat: 1}]` A one-dimensional array with two objects in the order: southWest,
     * northEast and each object with a lat and lon key.
     * * `[Maps.LngLat, Maps.LngLat]` A one-dimensional array with two Maps.LngLat instances in the order: southWest and northEast.
     * @default None
     */
    boundingBox: LngLatBoundsRequestParam;

    /**
     * The fields to be included in the response, nested as in the response schema.
     * In order to obtain all data, it is necessary to place the whole object in the query.
     * 
     * `{
     *    incidents {
     *      type,
     *      geometry {
     *        type,
     *        coordinates
     *      },
     *      properties {
     *        id,
     *        iconCategory,
     *        magnitudeOfDelay,
     *        events {
     *          description,
     *          code,
     *          iconCategory
     *        },
     *        startTime,
     *        endTime,
     *        from,
     *        to,
     *        length,
     *        delay,
     *        roadNumbers,
     *        aci {
     *          probabilityOfOccurrence,
     *          numberOfReports,
     *          lastReportTime
     *        }
     *      }
     *    }
     *  }`
     * @default "{incidents{type,geometry{type,coordinates},properties{iconCategory}}}"
     */
    fields?: string;

    /**
     * Language code that decides in which language the results should be returned.
     * 
     * The `ISO 639-1` code for the output language.
     * 
     * Affects the description field in the response.
     * * When an invalid language code is provided the response is returned in English.
     * * When an incident description does not have a translation, an English description is returned.
     * @default "en-GB"
     */
    language?: string;

    /**
     * The protocol type to be used in the calls.
     *
     * Represents the type of protocol used to perform a service call.
     * @default "https"
     */
    protocol?: "http" | "https";

    /**
     * A valid, not older than two minutes, traffic model ID.
     * 
     * The Traffic Model ID is the reference value for the state of traffic at a particular time.
     * It is updated every minute, and is valid for two minutes before it times out. 
     * If not provided the current traffic model ID is used.
     */
    t?: string;

     /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;
  }

  type IncidentDetailsV5Response = {
    /**
     * Incidents which belong or intersect with the given bounding box.
     */
    incidents?: IncidentResultV5[];

    /**
     * Returns the value of `Tracking-ID` response header.
     */
    getTrackingId(): string;
  }

  type IncidentResultV5 = {
    /**
     * The value is set as `Feature` (GeoJSON feature object).
     */
    type?: string;

    /**
     * The properties of a particular incident.
     */
    properties?: IncidentDetailsV5Properties;

    /**
     * A GeoJSON feature of type `Point` or `Linestring` (depending on the incident).
     * It always contains the `type` and `coordinates` fields.
     */
    geometry?: Omit<Point|LineString,'bbox'>; 
  }

  type IncidentDetailsV5Properties = {
    /**
     * The ID of the traffic incident, common among Traffic Incident API services where it is available.
     */
    id?: string;

    /**
     * The main icon category associated with this incident. This is an icon category associated with
     * the first event in the `events` list describing the incident. The values meaning: 
     * * `0` Unknown
     * * `1` Accident
     * * `2` Fog
     * * `3` Dangerous Conditions
     * * `4` Rain
     * * `5` Ice
     * * `6` Jam
     * * `7` Lane Closed
     * * `8` Road Closed
     * * `9` Road Works
     * * `10` Wind
     * * `11` Flooding
     * * `14` Broken Down Vehicle
     */
    iconCategory?: 0|1|2|3|4|5|6|7|8|9|10|11|14;

    /**
    * The magnitude of delay associated with an incident. Numbers meanings:
    * * `0` Unknown
    * * `1` Minor
    * * `2` Moderate
    * * `3` Major
    * * `4` Undefined (used for road closures and other indefinite delays)
    */
    magnitudeOfDelay?: 0|1|2|3|4;

    /**
     * The list of events describing the details of the incident in the language requested.
     * Traffic incident can be described with more than one `Event` object.
     */
    events?: IncidentDetailsV5Event[];

    /**
     * Start time of the incident, if available. The date is described in the `ISO8601` format.
     */
    startTime?: string|null;

    /**
     * End time of the incident, if available. The date is described in the `ISO8601` format.
     */
    endTime?: string|null;

    /**
     * The name of the location where the traffic due to the incident starts.
     */
    from?: string|null;

    /**
     * The name of the location where the traffic due to the incident ends.
     */
    to?: string|null;

    /**
     * Length of the incident in meters.
     */
    length?: number;

    /**
     * The delay in seconds caused by the incident (except road closures).
     */
    delay?: number|null;

    /**
     * The road number(s) affected by the incident.
     */
    roadNumbers?: string[];

    /**
     * The Community Attributes (ACI)
     */
    aci?: {
      /**
       * Enumeration string specifying the likelihood of the occurring incident.
       */
      probabilityOfOccurrence?: 'certain'|'probable'|'risk_of'|'improbable';

      /**
       * Number of reports given by actual end-users.
       */
      numberOfReports?: number;

      /**
       * The date in `ISO8601` format, when the last time the incident was reported. Gives the user confidence that the incident is fresh.
       */
      lastReportTime?: string;
    }|null;
  }

  type IncidentDetailsV5Event = {
    /**
     * The description of the event (being part of incident) in the requested language.
     */
    description?: string;

    /**
     * The predefined alert code, describing the event (part of incident).
     */
    code?: number;

    /**
     * The icon category associated with the event. The icon category from the first `event` in the list
     * is replicated in the `iconCategory` field in the `IncidentProperties` object.
     */
     iconCategory?: number;
  }

  type IncidentViewportOptions = {
    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * The protocol type to be used in the calls.
     *
     * Represents the type of protocol used to perform a service call.
     * @default "https"
     */
    protocol?: "http" | "https";
  };

  type IncidentViewportResponse = {
    /**
     * The main response element.
     */
    viewpResp?: ViewpResp,

    /**
     * Returns the value of Tracking-ID response header.
     */
    getTrackingId(): string;
  };

  type ViewpResp = {
    /**
     * Traffic information
     */
    trafficState?: TrafficState,

    /**
     * Copyright information for the map viewport.
     * It indicates which copyright holders must be cited but does not list them.
     */
    copyrightIds?: string,

    /**
     * Indicates the software version that generated the response.
     */
    '@version'?: string,

    /**
     * Indicates the TomTom internal names for the map data used in the viewport.
     */
    '@maps'?: string
  };

  type TrafficState = {
    /**
     * The elapsed time (in seconds) from the Traffic Model ID creation.
     */
    '@trafficAge'?: number,

    /**
     * The unique id called Traffic Model ID is used to traffic services calls.
     * * It allows to obtain information from particular traffic updates.
     * * Traffic Model ID is updated every minute, and is valid for two minutes before it times out.
     */
    '@trafficModelId'?: string
  };

  type MatrixRoutingOptions = {
    /**
     * The properly formatted date with a time value. Date cannot be in the past
     * and has to follow ISO 8601 standard.
     *
     * A setter and getter for the 'arriveAt' attribute.
     * The date and time of arrival at the destination point.
     * It must be specified as a dateTime.
     * When a time zone offset is not specified it will be assumed to be that of the destination point.
     * The arriveAt value must be in the future. The arriveAt parameter cannot be used in conjunction with
     * departAt.
     * @default None
     */
    arriveAt?: string;

    /**
     * Specifies something that the route calculation should try to avoid when
     * determining the route.
     *
     * A setter and getter for the avoid attribute.
     * Specifies something that the route calculation should try to avoid when determining the route.
     * Can be specified multiple times. Possible values:
     * tollRoads avoids toll roads.
     * motorways avoids motorways.
     * ferries avoids ferries.
     * unpavedRoads avoids unpaved roads.
     * carpools avoids routes that require use of carpool (HOV/ High Occupancy Vehicle) lanes.
     * alreadyUsedRoads avoids using the same road multiple times.
     * Most useful in conjunction with routeType=thrilling.
     * @default None
     */
    avoid?: Avoidable | Avoidable[];

    /**
     * Possible values: sync, async, redirect
     *
     * This option lets you manually set how a matrix request should be performed. Otherwise we decide for you if you should
     * use sync, async, or redirect mode. For a further explanation please refer to the Matrix Routing docs
     * here.
     * @default None
     */
    batchMode?: "sync" | "async" | "redirect";

    /**
     * Setting all provides additional information regarding travel
     * times.
     *
     * A setter and getter for the 'computeTravelTimeFor' attribute.
     * Specifies whether to return additional travel times using different types of traffic information (none,
     * historic, live) as well as the default best-estimate travel time. Possible values:
     * none - do not compute additional travel times.
     * all - compute travel times for all types of traffic information. Specifies all results in the fields
     * noTrafficTravelTimeInSeconds, historicTrafficTravelTimeInSeconds and
     * liveTrafficIncidentsTravelTimeInSeconds being included in the summaries in the route response.
     * @default None
     */
    computeTravelTimeFor?: "all" | "none";

    /**
     * The properly formatted date with the time or 'now' value. Date cannot be in the
     * past and has to follow ISO 8601 standard.
     *
     * A setter and getter for the 'departAt' attribute.
     * The date and time of departure from the origin point.
     * Departure times apart from now must be specified as a dateTime.
     * When a time zone offset is not specified, it will be assumed to be that of the origin point.
     * The departAt value must be in the future. The departAt parameter cannot be used in conjunction with
     * arriveAt.
     * @default None
     */
    departAt?: string;

    /**
     * A set of destination locations represented by points
     * (latitude/longitude object).
     *
     * A setter and getter for the 'destinations' attribute.
     * A set of destination locations represented by points (latitude/longitude object).
     * At least one destination is required.
     * @default None
     */
    destinations?: string[];

    /**
     * The level of hilliness on a thrilling route.
     *
     * A setter and getter for the 'hilliness' attribute.
     * The degree of hilliness for thrilling route. Possible values: low, normal, high.
     * This parameter can only be used in conjunction with routeType thrilling.
     * @default None
     */
    hilliness?: "low" | "normal" | "high";

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * A set of origin locations represented by points (latitude/longitude object).
     *
     * A setter and getter for the 'origins' attribute.
     * A set of origin locations represented by points (latitude/longitude object). At least one origin is required.
     * @default None
     */
    origins?: Object[];

    /**
     * The route type to be used during route calculation.
     *
     * A setter and getter for the routeType attribute.
     * Represents the type of route requested.
     * Notes on specific values:
     * fastest returns the fastest route.
     * shortest returns the shortest route by distance.
     * eco routes balance economy and speed.
     * thrilling routes include interesting or challenging roads and use as few motorways as possible. You can
     * choose the level of turns included and also the degree of hilliness. See the hilliness and windingness
     * parameters to set this. There is a limit of 900km on routes planned with routeType=thrilling
     * The default value is fastest.
     * @default None
     */
    routeType?: "fastest" | "shortest" | "eco" | "thrilling";

    /**
     * A boolean flag to determine if traffic data should be used to calculate the
     * route.
     *
     * A setter and getter for the 'traffic' attribute.
     * Possible values:
     * true (do consider all available traffic information during routing).
     * false (ignore current traffic data during routing). Note that although the current traffic data is
     * ignored during routing, the effect of historic traffic on effective road speeds is still incorporated.
     * The default is true.
     * @default None
     */
    traffic?: string | boolean;

    /**
     * The primary means of transportation to be used while routing.
     *
     * A setter and getter for the 'travelMode' attribute.
     * The mode of travel for the requested route. Possible values: car, truck, taxi, bus, van, motorcycle,
     * bicycle, pedestrian. Note that the requested travelMode may not be available for the entire route. Where
     * the requested travelMode is not available for a particular section, the element of the
     * response for that section will be 'other'.
     * @default None
     */
    travelMode?:
      | "car"
      | "truck"
      | "taxi"
      | "bus"
      | "van"
      | "motorcycle"
      | "bicycle"
      | "pedestrian";

    /**
     * The vehicle axle wight in kg.
     *
     * A setter and getter for 'vehicleAxleWeight' attribute.
     * Weight per axle of the vehicle in kg. A value of 0 means that weight restrictions per axle are not
     * considered during route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleAxleWeight?: number;

    /**
     * True if the vehicle is used for commercial purposes.
     *
     * A setter and getter for the 'vehicleCommercial' attribute.
     * Vehicle is used for commercial purposes and thus may not be allowed to drive on some roads. This
     * parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleCommercial?: boolean;

    /**
     * The vehicle engine type.
     *
     * A setter and getter for 'vehicleEngineType' attribute.
     * Engine type of the vehicle. This parameter is currently only considered for travelMode truck. Valid
     * options are: combustion, electric.
     * @default None
     */
    vehicleEngineType?: "combustion" | "electric";

    /**
     * The vehicle height in meters.
     *
     * A setter and getter for the 'vehicleHeight' attribute.
     * Height of the vehicle in meters. A value of 0 means that height restrictions are not considered
     * during route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleHeight?: number;

    /**
     * The vehicle length in meters.
     *
     * A setter and getter for the 'vehicleLength' attribute.
     * Length of the vehicle in meters. A value of 0 means that length restrictions are not considered during
     * route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleLength?: number;

    /**
     * The array of truck cargo classifications.
     *
     * A setter and getter for the 'vehicleLoadType' attribute.
     * Types of cargo that may be classified as hazardous materials and restricted from some roads. Available
     * vehicleLoadType values are US Hazmat classes 1 through 9, plus generic classifications for use in other
     * countries.
     * Use these for routing in US
     * USHazmatClass1 Explosives
     * USHazmatClass2 Compressed gas
     * USHazmatClass3 Flammable liquids
     * USHazmatClass4 Flammable solids
     * USHazmatClass5 Oxidizers
     * USHazmatClass6 Poisons
     * USHazmatClass7 Radioactive
     * USHazmatclass8 Corrosives
     * USHazmatClass9 Miscellaneous
     * Use these for routing in all other countries
     * otherHazmatExplosive Explosives
     * otherHazmatGeneral Miscellaneous
     * otherHazmatHarmfulToWater Harmful to water
     * This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleLoadType?: string | string[];

    /**
     * The maximal allowed vehicle speed in km/h (kilometers per hour).
     *
     * A setter and getter for the 'vehicleMaxSpeed' attribute.
     * Maximum speed of the vehicle in km/hour. A value of 0 means that an appropriate value for the vehicle
     * will be determined and applied during route planning. A non-zero value may be overridden during route
     * planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleMaxSpeed?: number;

    /**
     * The vehicle weight in kg (kilograms).
     *
     * A setter and getter for 'vehicleWeight' attribute.
     * Weight of the vehicle in kg. A value of 0 means that weight restrictions are not considered during route
     * planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleWeight?: number;

    /**
     * The vehicle width in meters.
     *
     * A setter and getter for the 'vehicleWidth' attribute.
     * Width of the vehicle in meters. A value of 0 means that width restrictions are not considered during
     * route planning. This parameter is currently only considered for travelMode truck.
     * @default None
     */
    vehicleWidth?: number;

    /**
     * The level of windingness on a thrilling route.
     *
     * A setter and getter for the 'windingness' attribute.
     * The level of turns for thrilling route. Possible values: low, normal, high.
     * This parameter can only be used in conjunction with routeType thrilling.
     * @default None
     */
    windingness?: "low" | "normal" | "high";
  };

  type ReverseGeocodeOptions = {
    /**
     * Format of newlines in the formatted address.
     *
     * Format of newlines in the formatted address.
     * If true, the address will contain newlines.
     * Otherwise, newlines will be converted to spaces.
     * @default None
     */
    allowFreeformNewline?: boolean;

    /**
     * A comma-separated string.
     * One or more of:
     * - Country
     * - CountrySubdivision
     * - CountrySecondarySubdivision
     * - CountryTertiarySubdivision
     * - Municipality
     * - MunicipalitySubdivision
     * - Neighbourhood
     * - PostalCodeArea
     *
     * This parameter specifies the level of filtering performed on geographies.
     * Providing the parameter narrows the search for the specified geography entity types.
     * The resulting response will contain the geography ID as well as the entity type matched.
     * This ID is a token that can be used to get the geometry of that geography.
     * The following parameters are ignored when entityType is set:
     * heading, number, returnRoadUse, returnSpeedLimit, roadUse, and returnMatchType.
     * @default None
     */
    entityType?: string | string[];

    /**
     * The directional heading of the vehicle in degrees for travel along a
     * segment of roadway.
     * 0 is North, 90 is East and so on. Values range from -360 to 360. The precision can include
     * up to one decimal place.
     *
     * Makes it possible to get the address information of the road, keeping in mind the direction.
     * @default None
     */
    heading?: number;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Language code that decides in which language the results
     * should be returned.
     *
     * The value should correspond to one of the supported IETF language codes.
     * The list is available here.
     * The code is case insensitive.
     * @default null
     */
    language?: string;

    /**
     * Enables the return of a comma-separted mapcodes list.
     * It can also filter the response to only show selected mapcode types. See Mapcodes in the response.
     * Values: One or more of:
     * * `Local`
     * * `International`
     * * `Alternative`
     *
     * A mapcode represents a specific location, to within a few meters.
     * Every location on Earth can be represented by a mapcode. Mapcodes are designed to be short,
     * easy to recognize, remember, and communicate. Visit the Mapcode project website for more information.
     */
    mapcodes?: string;

    /**
     * The date and time used to return time zone information.
     * * It allows the service to decide whether the Daylight Saving Time time zone should be used or not.
     * * It must conform to RFC 3339.
     */
    dateTime?: string;

    /**
     * Street number as a string.
     *
     * If a street number is sent in along with the request, the response may
     * include the side of the street (Left/Right), and also an offset position for that street number.
     * @default None
     */
    number?: string;

    /**
     * Longitude and latitude data in one of the supported
     * formats.
     *
     * This option's value should have the location to be reverse geocoded.
     * This option is able to convert a number of popular formats into a geographic coordinate.
     * The supported formats are listed below:
     * Maps.LngLat Class instance.
     * [0, 0] A one-dimensional array with two indexes for longitude and latitude respectively.
     * ["0", "0"] A one-dimensional array with two indexes for longitude and latitude respectively.
     * "0,1" A string with longitude and latitude divided by a comma.
     * {lng: Function, lat: Function} An object with two functions returning longitude and latitude.
     * {lon: 0, lat: 1} An object with two keys: lat and lon.
     * {lng: 0, lat: 1} An object with two keys: lat and lng.
     * {x: 0, y: 1} An object with two keys: x as longitude and y as latitude.
     * {longitude: 0, latitude: 1} An object with two keys: longitude and latitude.
     * @default None
     */
    position?: LngLatRequestParam;

    /**
     * The protocol type to be used in the calls.
     *
     * Represents the type of protocol used to perform a service call.
     * @default "https"
     */
    protocol?: "http" | "https";

    /**
     * A positive integer value in meters.
     *
     * This option specifies the search radius in meters using the coordinates given to the center
     * option as origin.
     * @default None
     */
    radius?: number;

    /**
     * Type of match.
     *
     * Includes information on the type of match the geocoder achieved in the response.
     * @default None
     */
    returnMatchType?: boolean;

    /**
     * Enable or disable the feature.
     *
     * Requires including a road use array for reversegeocodes at street level.
     * @default None
     */
    returnRoadUse?: boolean;

    /**
     * Enable or disable the feature.
     *
     * Allows, if possible, the receiving of speed limit information at the given location.
     * @default None
     */
    returnSpeedLimit?: boolean;

    /**
     * An array of strings, or just one string with comma-separated values.
     *
     * Use this option if you want to restrict the result to one, or a group of the following road uses:
     * "LimitedAccess"
     * "Arterial"
     * "Terminal"
     * "Ramp"
     * "Rotary"
     * "LocalStreet"
     * @default None
     */
    roadUse?: string[] | string;

    /**
     * The street's number.
     *
     * Represents the street's number for the structured address.
     * @default None
     */
    streetNumber?: string;

    /**
     * The new value to be set.
     *
     * Sets or returns the view option value to be used in the calls.
     * Can be one of "Unified", "AR", "IN", "PK", "IL, "MA", "RU", "TR" and "CN".
     * Legend:
     * Unified - International view
     * AR - Argentina
     * IN - India
     * PK - Pakistan
     * IL - Israel
     * MA - Morocco
     * RU - Russia
     * TR - Turkey
     * CN - China
     * @default None
     */
    view?: View;
  };

  type StaticImageOptions = {
    /**
     * Bounding box.
     * @default None
     */
    bbox?: LngLatBounds;

    /**
     * Coordinates to the center of the view.
     * @default None
     */
    center?: LngLat;

    /**
     * The format of the image to be requested.
     * @default "png"
     */
    format?: "png" | "jpg" | "jpeg";

    /**
     * Height of the image in pixels.
     * @default None
     */
    height?: number;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Language to use for the labels.
     *
     * You can find the list of supported languages here.
     * @default "NGT"
     */
    language?: string;

    /**
     * The base map's layer to be used.
     * @default "basic"
     */
    layer?: "basic" | "hybrid" | "labels";

    /**
     * The base map style to be used.
     * @default "main"
     */
    style?: "main" | "night";

    /**
     * Geopolitical view.
     * Can be one of "Unified", "IL", "IN", "MA", "PK", "AR", "Arabic", "TR", "RU", "CN"
     * @default "Unified"
     */
    view?: View;

    /**
     * Width of the image in pixels.
     * @default None
     */
    width?: number;

    /**
     * Positive integer between 0 and 22.
     * @default 12
     */
    zoom?: number;
  };

  type PoiCategoriesOptions = {
    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

    /**
     * Language code that decides in which language the results
     * should be returned.
     *
     * The value should correspond to one of the supported IETF language codes.
     * The list is available here.
     * The code is case insensitive.
     * @default null
     */
    language?: string;
  };

  type EvChargingStationsAvailabilityOptions = {
    /**
     * A valid ID of EV charging station.
     * @default None
     */
    chargingAvailability: string;

    /**
     * A valid API Key for the requested service.
     *
     * A valid API Key is required to make use of the given service.
     * It can be issued in the Developer Portal.
     * @default None
     */
    key: string;

    /**
     * Sets value of "Tracking-ID" header.
     * It is an identifier for the request. If not set by the user, UUID is generated for each call.
     * * It can be used to trace a call.
     * * The value must match the regular expression '^[a-zA-Z0-9-]{1,100}$'.
     * * An example of the format that matches this regular expression is UUID:
     * (e.g. 9ac68072-c7a4-11e8-a8d5-f2801f1b9fd1). For details check {@link https://tools.ietf.org/html/rfc4122|RFC 4122.}
     * * If specified, it is replicated in the Tracking-ID Response header.
     * * It is only meant to be used for support and does not involve tracking of you or your users in any form.
     *
     * @default uuid
     */
    trackingId?: string;

  };

  type SearchResponse<S,R> = {
    /**
     * Summary information about the search that was performed.
     */
    summary?: S;
    /**
     * Search results list, sorted in descending order by score.
     */
    results?: R[];
  }

  type FuzzySearchResponse = SearchResponse<FuzzySearchSummary, FuzzySearchResult>;
  type PoiSearchResponse = SearchResponse<PoiSearchSummary, PoiSearchResult>;
  type CategorySearchResponse = SearchResponse<CategorySearchSummary, CategorySearchResult>;
  type GeometrySearchResponse = SearchResponse<GeometrySearchSummary, GeometrySearchResult>;
  type NearbySearchResponse = SearchResponse<NearbySearchSummary, NearbySearchResult>;
  type AlongRouteSearchResponse = SearchResponse<AlongRouteSearchSummary, AlongRouteSearchResult>;
  type PlaceByIdResponse = SearchResponse<PlaceByIdSummary, PlaceByIdResult>;

  type Summary = {
    /**
     * Query as interpreted by the search engine.
     */
    query?: string;

    /**
     * Response type. Can be NEARBY or NON_NEAR.
     */
    queryType?: "NEARBY" | "NON_NEAR";

    /**
     * Time spent on resolving the query.
     */
    queryTime?: number;

    /**
     * Number of results in the response.
     */
    numResults?: number;

    /**
     * Starting offset of the returned results within the full results set.
     */
    offset?: number;

    /**
     * Total number of results found.
     */
    totalResults?: number;

    /**
     * Maximum fuzzy level required to provide results.
     */
    fuzzyLevel?: number;
  };

  type SummaryGeoBiasMixin = {
    /**
     * Position used to bias the results: LatLon double
     * Example: 37.819722,-122.478611
     */
     geoBias?: LatLng;
  };

  type FuzzySearchSummary = Summary & SummaryGeoBiasMixin;
  type PoiSearchSummary = Summary & SummaryGeoBiasMixin;
  type CategorySearchSummary = Summary & SummaryGeoBiasMixin;
  type GeometrySearchSummary = Summary & SummaryGeoBiasMixin;
  type NearbySearchSummary = Summary & SummaryGeoBiasMixin;
  type AlongRouteSearchSummary = Summary;
  type PlaceByIdSummary = Summary;

  type SearchResult<T = 'POI', A = Address> = {
    /**
     * Type of search result.
     */
    type?: T;

    /**
     * A stable unique id for the POI index, and a non-stable unique id for the other indexes.
     * Note: Stable id means that it doesn't change between data releases without changing
     * the location, attribution or classification.
     */
    id?: string;

    /**
     * Score of the result.
     * A larger score means there is a probability
     * that a result meeting the query criteria is higher.
     */
    score?: number;

    /**
     * Unit: meters. This is the distance to an object if geobias was provided.
     */
    dist?: number;

    /**
     * Information about the original data source of the result.
     */
    info?: string;

    /**
     * Information about the Points of Interest in the result.
     * Present if type == POI.
     */
    poi?: Poi;

    /**
     * Structured address for the result.
     */
    address?: A;

    /**
     * Position of the result: LatLon
     * Example: 37.819722,-122.478611
     */
    position?: LatLng;

    /**
     * List of mapcode objects
     */
    mapcodes?: Mapcode[];

    /**
     * A viewport which can be used to display the
     * result on a map.viewport{} object
     */
    viewport?: Viewport;

    /**
     * List of entry points of the POI.
     */
    entryPoints?: EntryPoint[];

    /**
     * Optional section.
     * Reference ids for use with the Additional Data service.
     */
    dataSources?: DataSources;

    /**
     * An object containing information about EV charging connectors.
     * Present only when the Points of Interest are of the Electric Vehicle Station type.
     */
    chargingPark?: ChargingPark;
  };

  type SearchResultEntityTypeMixin = {
    /**
     * Optional section.
     * Only present if type == Geography. One of:
     * Country
     * CountrySubdivision
     * CountrySecondarySubdivision
     * CountryTertiarySubdivision
     * Municipality
     * MunicipalitySubdivision
     * Neighbourhood
     * PostalCodeArea
     */
    entityType?: string;
  };

  type SearchResultRelatedPoisMixin = {
    /**
     * List of related Points Of Interest.
     */
    relatedPois?: RelatedPoi[];
  };

  type SearchResultBoundingBoxMixin = {
    /**
     * Optional section. Only present if type == Geography.
     * A bounding box which can be used to display the
     * result on a map defined by minimum and maximum longitudes and latitudes
     */
     boundingBox?: BoundingBox;
  };

  type SearchResultAddressRangesMixin = {
    /**
     * Address ranges on a street segment.
     * Available only for results where the
     * result type is equal to "Address Range".
     */
     addressRanges?: AddressRanges;
  };

  type SearchResultDetourTimeMixin = {
    /**
     * Detour time in seconds.
     */
     detourTime?: number;
  };

  type SearchResultDetourDistanceMixin = {
    /**
     * Detour distance in meters.
     */
     detourDistance?: number;
  };

  type SearchResultDetourOffsetMixin = {
    /**
     * Detour offset in meters.
     */
     detourOffset?: number;
  };

  type FuzzySearchResult = SearchResult<
      SearchResultType,
      Address &
      AddressCountrySubdivisionCodeMixin &
      AddressPostalNameMixin
    > &
    SearchResultEntityTypeMixin &
    SearchResultRelatedPoisMixin &
    SearchResultBoundingBoxMixin &
    SearchResultAddressRangesMixin;

  type PoiSearchResult = SearchResult &
    SearchResultRelatedPoisMixin;

  type CategorySearchResult = SearchResult &
    SearchResultRelatedPoisMixin;

  type GeometrySearchResult = SearchResult<
      SearchResultType,
      Address &
      AddressCountrySubdivisionCodeMixin &
      AddressPostalNameMixin
    > &
    SearchResultEntityTypeMixin &
    SearchResultRelatedPoisMixin &
    SearchResultAddressRangesMixin;

  type NearbySearchResult = SearchResult &
    SearchResultRelatedPoisMixin;

  type AlongRouteSearchResult = SearchResult &
    SearchResultRelatedPoisMixin &
    SearchResultDetourTimeMixin &
    SearchResultDetourDistanceMixin &
    SearchResultDetourOffsetMixin;

  type PlaceByIdResult = SearchResult<
      SearchResultType
    > &
    SearchResultEntityTypeMixin &
    SearchResultAddressRangesMixin;

  type Poi = {
    /**
     * Name of the POI.
     */
    name?: string;

    /**
     * Telephone number.
     */
    phone?: string;

    /**
     * The list of POI brands.brands[] array
     */
    brands?: Brand[];

    /**
     * Website URL.
     */
    url?: string;

    /**
     * The list of POI categories.Category Codes
     * Deprecated: Use classifications instead.
     * As of May 1, 2018:
     * The Response categories field has been deprecated.
     * It will be withdrawn following a 12 month deprecation period.
     * The planned withdrawal date is May 1, 2019.
     */
    categories?: string[];

    /**
     * The list of the most specific POI categories.
     */
    categorySet?: Category[];

    /**
     * List of opening hours for a POI (Points of Interest).
     */
    openingHours?: OpeningHours;

    /**
     * The list of POI category classifications.
     */
    classifications?: Classification[];

    /**
     * Time zone information for the POI.
     */
    timeZone?: TimeZone;
  };

  type RelatedPoi = {
    /**
     * Relation type.
     */
    relationType?: "child" | "parent";
    /**
     * Pass this as entityId to the "Place by ID" service to fetch additional data for the Point Of Interest.
     */
    id?: string;
  }

  type ChargingPark = {
    /**
     * A list of connectors available in the Points Of Interest of an Electric Vehicle Station type.
     */
    connectors?: Connector[];
  }
  
  type Connector = {
    /**
     * Type of the connector available in Electric Vehicle Station.
     */
    connectorType?: string;
    /**
     * Rated power of the connector in kilowatts (kW).
     */
    ratedPowerKW?: number;
    /**
     * Current value of the connector in amperes (A).
     */
    currentA?: number;
    /**
     * Current type of the connector.
     */
    currentType?: string;
    /**
     * Voltage of the connector in Volts (V).
     */
    voltageV?: number;
  }

  type Category = {
    /**
     * Category id. Full list of available categories is available under POI Categories endpoint.
     */
    id?: number;
  };

  type Brand = {
    /**
     * Brand name.
     */
    name?: string;
  };

  type Classification = {
    /**
     * Fixed top level category code. Category Code
     */
    code?: string;

    /**
     * List of category names with locale code information.
     * Currently only "en-US" locale is returned.
     */
    names?: Locale[];
  };

  type Locale = {
    /**
     * Locale code of this category name.
     */
    nameLocale?: string;

    /**
     * Category name in given locale.
     */
    name?: string;
  };

  type Address = {
    /**
     * The building number on the street.
     */
    streetNumber?: string;

    /**
     * The street name.
     */
    streetName?: string;

    /**
     * Sub / Super City
     */
    municipalitySubdivision?: string;

    /**
     * City / Town
     */
    municipality?: string;

    /**
     * County
     */
    countrySecondarySubdivision?: string;

    /**
     * Named Area
     */
    countryTertiarySubdivision?: string;

    /**
     * State or Province
     */
    countrySubdivision?: string;

    /**
     * Postal Code / Zip Code
     */
    postalCode?: string;

    /**
     * Extended postal code (availability dependent on region)
     */
    extendedPostalCode?: string;

    /**
     * Country (Note: This is a two-letter code, not a country name.)
     */
    countryCode?: string;

    /**
     * Country name
     */
    country?: string;

    /**
     * ISO alpha-3 country code
     */
    countryCodeISO3?: string;

    /**
     * An address line formatted according to formatting
     * rules of a result's country of origin, or in case
     * of countries its full country name.
     */
    freeformAddress?: string;

    /**
     * A full name of a first level of country administrative hierarchy.
     * This field appears only in case countrySubdivision is presented in an abbreviated form.
     * Supported only for USA, Canada and Great Britain.
     */
    countrySubdivisionName?: string;

    /**
     * An address component which represents the name of a geographic area or locality that groups a number of addressable objects for addressing purposes, without being an administrative unit.
     */
    localName?: string;
  };

  type AddressPostalNameMixin = {
    /**
     * An address component which represents the name for a postal code that is related
     * to a single administrative area, city, town, or other populated place.
     * Note: This field only appears for geographies having entityType == PostalCodeArea.
     * It is only supported for the USA.
     */
    postalName?: string;
  }

  type AddressCountrySubdivisionCodeMixin = {
    /**
     * `countrySubdivisionCode` prefixed by `countryCode` (`countryCode-countrySubdivisionCode`)
     * and the hyphen forms the ISO 3166-2 code.
     * 
     * Only present if returned document has entityType == CountrySubdivision.
     * 
     * examples: TX for Texas, SCT for Scotland, ON for Ontario, ZE for Zeeland and BB for Brandenburg. 
     */
    countrySubdivisionCode?: string;
  }

  type Mapcode = {
    /**
     * Type of mapcode:
     * Local: the shortest possible (and easiest to remember) mapcode. Local mapcodes are especially useful when the user knows what territory the mapcode is in (for example, when an application is designed to be used inside just one European country or US state). Note that the code element of a Local mapcode is ambiguous when used without the territory element - e.g.: the "4J.P2" mapcode can mean the Eiffel Tower location (48.858380, 2.294440) (with the territory set to FRA), but also some place in Amsterdam-Noord, Netherlands (52.382184, 4.911021) (with the territory set to NLD).
     * International: this mapcode is unambiguous. It is also the longest.
     * Alternative: alternatives to Local mapcodes. Each Alternative mapcode points to slightly different coordinates due to the way mapcodes are computed (see the mapcode documentation). For example: the position from a response can be encoded as "5DM.WC" (51.759244, 19.448316) and the "VHJ.036" (51.759245, 19.448264), which are close to each other, but not exactly the same place.
     */
    type?: string;

    /**
     * The full form of a mapcode (territory + code). It is always unambiguous.
     * The territory element is always in the Latin alphabet.
     * In an International mapcode, the territory part is empty.
     */
    fullMapcode?: string;

    /**
     * The territory element of the mapcode. The territory element is always in the Latin alphabet. Usually, the territory is the ISO 3166-1 alpha 3 abbreviation for the country name. However in these eight very large countries:
     * USA
     * Canada
     * Mexico
     * Brazil
     * India
     * Australia
     * Russia
     * China
     *
     * an address has little meaning unless the user also knows what state it's in (just as, elsewhere, an address has little meaning if the user doesn’t know what country it’s in). More information about territory codes is available here. This field is not returned for an International mapcode.
     */
    territory?: string;

    /**
     * The mapcode without the territory element. It consists of two groups of letters and digits separated by a dot.
     * The code is using the same language and alphabet as the response. The language parameter may be used to modify the language and alphabet of both the response and the code (for example: Cyrillic for the language 'ru-RU').
     * This field is not returned for the International mapcodes - use fullMapcode instead.
     */
    code?: string;
  };

  type Viewport = {
    /**
     * Top left corner of the rectangle
     */
    topLeftPoint?: LatLng;

    /**
     * Bottom right corner of the rectangle
     */
    btmRightPoint?: LatLng;
  };

  type BoundingBox = {
    /**
     * Top left position of the bounding box
     */
    topLeftPoint?: LatLng;

    /**
     * Bottom right position of the bounding box
     */
    btmRightPoint?: LatLng;
  };

  type EntryPoint = {
    /**
     * Main entry point: One of:
     * main
     * minor
     */
    type?: "main" | "minor";

    /**
     * If present, represents the type of access for the POI. Example: FrontDoor
     */
    functions?: string[];

    /**
     * Position of the entry point
     */
    position?: LatLng;
  };

  type AddressRanges = {
    /**
     * An address range on the left side of a street segment
     * (assuming looking from the "from" end toward the "to" end).
     */
    rangeLeft?: string;

    /**
     * An address range on the right side of a street segment
     * (assuming looking from the "from" end toward the "to" end).
     */
    rangeRight?: string;

    /**
     * A beginning point of a street segment:LatLon double
     */
    from?: string;

    /**
     * An end point of a street segment:LatLon double
     */
    to?: string;
  };

  type DataSources = {
    /**
     * Information about the charging stations availability. Only present if type == POI.
     */
    chargingAvailability?: ChargingAvailability;

    /**
     * Information about the geometric shape of the result. Only present if type == Geography or POI.
     */
    geometry?: Geometry;
  };

  type ChargingAvailability = {
    /**
     * Pass this as chargingAvailability to the EV Charging Stations Availability service to fetch charging availability information for this result.
     */
    id?: string;
  };

  type Geometry = {
    /**
     * Pass this as geometryId to the Additional Data service to fetch geometry information for this result.
     */
    id?: string;
  };

  type LatLng = {
    /**
     * Latitude. Reference: Latitude, Longitude and Coordinate System Grids
     */
    lat?: number;

    /**
     * Longitude. Reference: Latitude, Longitude and Coordinate System Grids
     */
    lng?: number;
  };

  type OpeningHours = {
    /**
     * Mode used in the Request.
     */
    mode?: string;

    /**
     * List of time ranges for the next 7 days.
     */
    timeRanges?: TimeRange[];
  };

  type TimeRange = {
    /**
     * The point in the next 7 days range when a given POI is being opened.
     * (or the beginning of the range if it was opened before the range)
     * inclusive
     */
    startTime?: Time;

    /**
     * The point in the next 7 days range when a given POI is being opened.
     * (or the beginning of the range if it was opened before the range)
     * exclusive
     */
    endTime?: Time;
  };

  type Time = {
    /**
     * Represents current day in calendar year in POI time zone.
     */
    date?: string;

    /**
     * Hours are in the 24 hour format in the local time of a POI; possible values are 0 - 23.
     */
    hour?: number;

    /**
     * Minutes are in the local time of a POI; possible values are 0 - 59.
     */
    minute?: number;
  };

  type TimeZone = {
    /**
     * ID from the IANA Time Zone Database.
     */
    ianaId?: string;
  };

  type Avoidable =
    | "tollRoads"
    | "motorways"
    | "ferries"
    | "unpavedRoads"
    | "carpools"
    | "alreadyUsedRoads";

  type Section =
    | "carTrain"
    | "ferry"
    | "tunnel"
    | "motorway"
    | "pedestrian"
    | "tollRoad"
    | "tollVignette"
    | "country"
    | "travelMode"
    | "traffic"
    | "carpool"
    | "urban"
    | "unpaved";

    type SearchResultType =
    | "POI"
    | "Street"
    | "Geography"
    | "Point Address"
    | "Address Range"
    | "Cross Street";

  type View = "Unified" | "AR" | "IN" | "PK" | "IL" | "MA" | "RU" | "TR" | "CN";

  type FuelSet = "Petrol" | "LPG" | "Diesel" | "Biodiesel" | "DieselForCommercialVehicles"
    | "E85" | "LNG" | "CNG" | "Hydrogen" | "AdBlue";

  type EntitTypeSet = "Country" | "CountrySubdivision" | "CountrySecondarySubdivision"
    | "CountryTertiarySubdivision" | "Municipality" | "MunicipalitySubdivision"
    | "Neighbourhood" | "PostalCodeArea";

  type LngLatBoundsRequestParam =
    | LngLatBounds
    | { minLon: number; maxLon: number; minLat: number; maxLat: number }
    | [number, number, number, number]
    | [[number, number], [number, number]]
    | [LngLatObjectRepresentation, LngLatObjectRepresentation]
    | string;

  type LngLatRequestParam =
    | LngLatObjectRepresentation
    | [number, number]
    | [string, string]
    | string;

  type LngLatObjectRepresentation =
    | LngLat
    | { lng: number; lat: number }
    | { lng(): number; lat(): number }
    | { lon: number; lat: number }
    | { x: number; y: number }
    | { longitude: number; latitude: number };

  type LngLatLike = tt.LngLat | [number, number] | { lng: number; lat: number };
  /**
   * A LngLat object represents a given longitude and latitude coordinate, measured in degrees.
   * This SDK uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON.
   * Note that any SDK method that accepts a LngLat object as an argument or option can also accept an
   * array of two numbers and will perform an implicit conversion. This flexible type can be used like this:
   * * `var v1 = new tt.LngLat(-122.420679, 37.772537);`
   * * `var v2 = [-122.420679, 37.772537];`
   * * `var v3 = {lon: -122.420679, lat: 37.772537};`
   * @param lng Longitude, measured in degrees.
   * @param lat Latitude, measured in degrees.
   */
  class LngLat {
    constructor(lng: number, lat: number);

    lng: number;
    lat: number;
    /**
     * Returns the coordinates represented as an array of two numbers.
     * @returns The coordinates represeted as an array of longitude and latitude.
     */
    toArray(): number[];
    /**
     * Returns a LngLatBounds from the coordinates extended by a given radius.
     * @param radius Distance in meters from the coordinates to extend the bounds.
     * @returns A new LngLatBounds object representing the coordinates
     * extended by the  radius.
     */
    toBounds(radius: number): tt.LngLatBounds;
    /**
     * Returns the coordinates represent as a string.
     * @returns The coordinates represented as a string of the format 'LngLat(lng, lat)'.
     */
    toString(): string;
    /**
     * Returns a new LngLat object whose longitude is wrapped to the range (-180, 180).
     * @returns The wrapped LngLat object.
     */
    wrap(): tt.LngLat;
    /**
     * Returns the approximate distance between a pair of coordinates in meters by using the Haversine Formula.
     * @param {Maps.LngLat} lngLat Coordinates to compute the distance to
     * @returns {Number} Approximate distance between a pair of coordinates in meters
     */
    distanceTo(lngLat: tt.LngLat): number;
    /**
     * Converts an array of two numbers or an object with lng and lat or lon and lat properties to a LngLat object.
     * If a LngLat object is passed in, the function returns it unchanged.
     * @static
     * @param input An array of two numbers or object to convert, or a  LngLat object to return.
     * @returns A new LngLat object, if a conversion occurred, or the original LngLat object.
     */
    static convert(input: tt.LngLatLike): tt.LngLat;
  }
  type LngLatBoundsLike =
    | tt.LngLatBounds
    | [tt.LngLatLike, tt.LngLatLike]
    | [number, number, number, number];
  /**
   * A LngLatBounds object represents a geographical bounding box, defined by its southwest and
   * northeast points in longitude and latitude.
   * If no arguments are provided to the constructor, a null bounding box is created.
   * Note that any SDK method that accepts a LngLatBounds object as an argument or option can also accept an
   * Array of two LngLatLike constructs and will perform an implicit conversion. This flexible type can be used like this:
   * * `var v1 = new tt.LngLatBounds(
   *  new tt.LngLat(-73.9876, 40.7661),
   *  new tt.LngLat(-73.9397, 40.8002)
   * );`
   * * `var v2 = new tt.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002])`
   * * `var v3 = [[-73.9876, 40.7661], [-73.9397, 40.8002]];`
   * @param sw The southwest corner of the bounding box.
   * @param ne The northeast corner of the bounding box.
   */
  class LngLatBounds {
    constructor(sw: tt.LngLatLike, ne: tt.LngLatLike);
    /**
     * Check if the point is within the bounding box.
     * @param lngLat Geographic point to check against.
     * @returns True if the point is within the bounding box.
     */
    contains(lngLat: tt.LngLatLike): boolean;
    /**
     * Extend the bounds to include a given LngLat or LngLatBounds.
     * @param obj object to extend to
     * @returns This
     */
    extend(obj: tt.LngLatLike | tt.LngLatBoundsLike): this;
    /**
     * Returns the geographical coordinate equidistant from the bounding box's corners.
     * @returns The bounding box's center.
     */
    getCenter(): tt.LngLat;
    /**
     * Returns the east edge of the bounding box.
     * @returns The east edge of the bounding box.
     */
    getEast(): number;
    /**
     * Returns the north edge of the bounding box.
     * @returns The north edge of the bounding box.
     */
    getNorth(): number;
    /**
     * Returns the northeast corner of the bounding box.
     * @returns The northeast corner of the bounding box.
     */
    getNorthEast(): tt.LngLat;
    /**
     * Returns the northwest corner of the bounding box.
     * @returns The northwest corner of the bounding box.
     */
    getNorthWest(): tt.LngLat;
    /**
     * Returns the south edge of the bounding box.
     * @returns The south edge of the bounding box.
     */
    getSouth(): number;
    /**
     * Returns the southeast corner of the bounding box.
     * @returns The southeast corner of the bounding box.
     */
    getSouthEast(): tt.LngLat;
    /**
     * Returns the southwest corner of the bounding box.
     * @returns The southwest corner of the bounding box.
     */
    getSouthWest(): tt.LngLat;
    /**
     * Returns the west edge of the bounding box.
     * @returns The west edge of the bounding box.
     */
    getWest(): number;
    /**
     * Check if the bounding box is an empty/null-type box.
     * @returns True if bounds have been defined, otherwise false.
     */
    isEmpty(): boolean;
    /**
     * Set the northeast corner of the bounding box
     * @param ne
     * @returns this
     */
    setNorthEast(ne: tt.LngLatLike): this;
    /**
     * Set the southwest corner of the bounding box
     * @param sw
     * @returns this
     */
    setSouthWest(sw: tt.LngLatLike): this;
    /**
     * Returns the bounding box represented as an array.
     * @returns The bounding box represented as an array, consisting of the southwest and
     * northeast coordinates of the bounding represented as arrays of numbers.
     */
    toArray(): number[][];
    /**
     * Return the bounding box represented as a string.
     * @returns The bounding box represents as a string of the format
     * 'LngLatBounds(LngLat(lng, lat), LngLat(lng, lat))'.
     */
    toString(): string;
    /**
     * Converts an array to a LngLatBounds object.
     * If a LngLatBounds object is passed in, the function returns it unchanged.
     * Internally, the function calls LngLat.convert to convert arrays to LngLat values.
     * @static
     * @param input An array of two coordinates to convert, or a  LngLatBounds object to return.
     * @returns A new LngLatBounds object, if a conversion occurred, or the original
     * LngLatBounds object.
     */
    static convert(input: tt.LngLatBoundsLike): tt.LngLatBounds;
  }
}
