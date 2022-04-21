
/**
 * @swagger
 * definitions:
 *  addHouse:
 *   type: object
 *   properties:
 *    houseNo:
 *     type: string
 *     example: "Demo"
 *    mainMemberName:
 *     type: string
 *     example: 'demo@gmail.com'
 *    phone:
 *     type: string
 *     example: "password"
 *    cast:
 *     type: string
 *     example: "1234567890"
 *    incomeSource:
 *     type: string
 *     example: 2
 *    higherEducation:
 *     type: string
 *     example: 3
 *    povertyLine:
 *     type: string
 *     example: 1
 *    child:
 *     type: string
 *     example: 3
 *    adolescentGirl:
 *     type: string
 *     example: 1
 *    woman:
 *     type: string
 *     example: 2
 *    faliyuId:
 *     type: string
 *     example: 7
 *    areaId:
 *     type: string
 *     example: 11
 *    image:
 *     type: string
 *     example: "gaurav ki image"
 *    createDate:
 *     type: string
 *     example: "2018-06-09 10:16:15.257"
 *    refId:
 *     type: string
 *     example: "6"
 *    entryDateTime:
 *     type: string
 *     example: "2018-06-09 10:16:15.257"
 *    siteId:
 *     type: string
 *     example: "9"
 *    timeSpan:
 *     type: string
 *     example: "1809211931047823"
 *    SanginiId:
 *     type: string
 *     example: "799"
 *    IsDeleted:
 *     type: string
 *     example: "0"
 *    status:
 *     type: string
 *     example: "0"
 *    villageId:
 *     type: string
 *     example: "13"
 */
  


/**
 * @swagger
 * /{baseurl}/add/house:
 *  post:
 *   description: Add House
 *   summary: Add House
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/addHouse'
 *   responses:
 *    []
 */



// ----------------------------------------------------------------------------------------------------



/**
 * @swagger
 * definitions:
 *  addMember:
 *   type: object
 *   properties:
 *    membername:
 *     type: string
 *     example: "Gaurav"
 *    lastName:
 *     type: string
 *     example: 'Sinha'
 *    gender:
 *     type: string
 *     example: "male"
 *    dob:
 *     type: string
 *     example: "1997-06-09 10:16:15.257"
 *    relation:
 *     type: string
 *     example: 24
 *    goAnganwadi:
 *     type: string
 *     example: 1
 *    breastFeed:
 *     type: string
 *     example: 1
 *    isPregnant:
 *     type: string
 *     example: 
 *    pragnancyMonth:
 *     type: string
 *     example: 9
 *    isLactating:
 *     type: string
 *     example: 
 *    noOfPragnancy:
 *     type: string
 *     example: 2
 *    deliveryDate:
 *     type: string
 *     example: 2018-06-09 10:16:15.257
 *    remarks:
 *     type: string
 *     example: "Awsm"
 *    houseId:
 *     type: string
 *     example: 281658
 *    image:
 *     type: string
 *     example: "nahideni"
 *    memberType:
 *     type: string
 *     example: "3"
 *    createDate:
 *     type: string
 *     example: 2018-06-09 10:16:15.257
 *    refId:
 *     type: string
 *     example: "6"
 *    eduId:
 *     type: string
 *     example: "21"
 *    timeSpan:
 *     type: string
 *     example: "1809211931047823"
 *    siteid:
 *     type: string
 *     example: "9"
 *    SanginiId:
 *     type: string
 *     example: "799"
 *    IsDeleted:
 *     type: string
 *     example: "0"
 *    villageId:
 *     type: string
 *     example: "3"
 *    areaId:
 *     type: string
 *     example: "11"
 *    faliyuId:
 *     type: string
 *     example: "7"
 *    isInstitutionalDelivery:
 *     type: string
 *     example: "1"
 *    isAbsentorMigrated:
 *     type: string
 *     example: "1"
 *    place:
 *     type: string
 *     example: "12212121"
 *    status:
 *     type: string
 *     example: "0"
 */
  


/**
 * @swagger
 * /{baseurl}/add/member:
 *  post:
 *   description: "Add Member"
 *   summary: "Add Member"
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/addMember'
 *   responses:
 *    []
 */



// ----------------------------------------------------------------------------------------------------





/**
 * @swagger
 * definitions:
 *  addMeasurement:
 *   type: object
 *   properties:
 *    memberId:
 *     type: string
 *     example: "574816"
 *    Height:
 *     type: string
 *     example: '12'
 *    weight:
 *     type: string
 *     example: "male"
 *    MUAC:
 *     type: string
 *     example: "12"
 *    HB:
 *     type: string
 *     example: 24
 *    BMI:
 *     type: string
 *     example: 21
 *    RUTF:
 *     type: string
 *     example: 12
 *    CMTC:
 *     type: string
 *     example: 
 *    Counseling:
 *     type: string
 *     example: 9
 *    IFA:
 *     type: string
 *     example: 
 *    bloodTest:
 *     type: string
 *     example: 2
 *    measureDate:
 *     type: date
 *     example: 2018-06-09 10:16:15.257
 *    BMIForAge:
 *     type: string
 *     example: "normal"
 *    WFA:
 *     type: string
 *     example: healthy
 *    HFA:
 *     type: string
 *     example: "healthy"
 *    WFL:
 *     type: string
 *     example: "healthy"
 *    houseId:
 *     type: string
 *     example: 4413
 *    refId:
 *     type: string
 *     example: "6"
 *    visitId:
 *     type: string
 *     example: "21"
 *    entryDate:
 *     type: string
 *     example: "2018-04-29"
 *    dateOfVisit:
 *     type: string
 *     example: "9"
 *    recommendDateOfVisit:
 *     type: string
 *     example: "2018-04-29"
 *    Result:
 *     type: string
 *     example: ""
 *    nRUTF:
 *     type: string
 *     example: "3"
 *    suggestion:
 *     type: string
 *     example: "11"
 *    nIFA:
 *     type: string
 *     example: "7"
 *    HBForAge:
 *     type: string
 *     example: "1"
 *    timeSpan:
 *     type: string
 *     example: "1201809211931047823"
 *    siteid:
 *     type: string
 *     example: "12"
 *    SanginiId:
 *     type: string
 *     example: "799"
 *    IsDeleted:
 *     type: string
 *     example: "0"
 *    previousWFL:
 *     type: string
 *     example: "haelthy"
 *    previousWFA:
 *     type: string
 *     example: "healthy"
 *    previousMeasureDate:
 *     type: string
 *     example: "2018-04-29"
 *    previousHFA:
 *     type: string
 *     example: "healthy"
 *    previousHBForAge:
 *     type: string
 *     example: ""
 *    previousBMI:
 *     type: string
 *     example: ""
 *    ApplicableAmount:
 *     type: string
 *     example: "0"
 *    PaidAmount:
 *     type: string
 *     example: "799"
 *    PaymentID:
 *     type: string
 *     example: "1"
 *    edema:
 *     type: string
 *     example: ""
 *    status:
 *     type: string
 *     example: "0"
 */
  


/**
 * @swagger
 * /{baseurl}/add/mesurement:
 *  post:
 *   description: add Measurement
 *   summary: add Measurement
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/addMeasurement'
 *   responses:
 *    []
 */

// ----------------------------------------------------------------------------------------------------





/**
 * @swagger
 * definitions:
 *  addFamilyCounselling:
 *   type: object
 *   properties:
 *    counsellTypeId:
 *     type: string
 *     example: "574816"
 *    houseId:
 *     type: string
 *     example: '12'
 *    counsellDate:
 *     type: string
 *     example: "male"
 *    participant:
 *     type: string
 *     example: "12"
 *    remark:
 *     type: string
 *     example: Gaurav ki councellingo
 *    refId:
 *     type: string
 *     example: "6"
 *    timeSpan:
 *     type: string
 *     example: "1201809211931047823"
 *    siteid:
 *     type: string
 *     example: "12"
 *    SanginiId:
 *     type: string
 *     example: "799"
 *    IsDeleted:
 *     type: string
 *     example: "0"
 *    status:
 *     type: string
 *     example: "0"
 */
  


/**
 * @swagger
 * /{baseurl}/add/addFamilyCounselling:
 *  post:
 *   description: add Family Counselling
 *   summary: add Family Counselling
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/addFamilyCounselling'
 *   responses:
 *    []
 */



// ----------------------------------------------------------------------------------------------------



/**
 * @swagger
 * definitions:
 *  familyCounsellingMember:
 *   type: object
 *   properties:
 *    counsellingId:
 *     type: string
 *     example: "100269"
 *    memberId:
 *     type: string
 *     example: "574815"
 *    timeSpan:
 *     type: string
 *     example: "1201809211931047823"
 *    siteid:
 *     type: string
 *     example: "12"
 *    status:
 *     type: string
 *     example: "0"
 */
  


/**
 * @swagger
 * /{baseurl}/member/addFamilyCounsellingMember:
 *  post:
 *   description: family Counselling Member
 *   summary: family Counselling Member
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/familyCounsellingMember'
 *   responses:
 *    []
 */



// ----------------------------------------------------------------------------------------------------



/**
 * @swagger
 * definitions:
 *  sanginiEvent:
 *   type: object
 *   properties:
 *    description:
 *     type: string
 *     example: "zsdfxghcjkjlzfdxgchgvjh"
 *    participants:
 *     type: string
 *     example: "22"
 *    remarks:
 *     type: string
 *     example: "gfchgjvhbk"
 *    status:
 *     type: string
 *     example: "1"
 *    villageId:
 *     type: string
 *     example: "6248"
 *    eventPlannedDate:
 *     type: string
 *     example: "2018-09-09"
 *    timeSpan:
 *     type: string
 *     example: "201809211931047823"
 *    status:
 *     type: string
 *     example: "0"
 *    siteid:
 *     type: string
 *     example: "12"
 *    IsDeleted:
 *     type: string
 *     example: "0"
 *    refId:
 *     type: string
 *     example: "11"
 *    apiStatus:
 *     type: string
 *     example: "0"
 */
  


/**
 * @swagger
 * /{baseurl}/add/sanginiEvent:
 *  post:
 *   description: sangini Event
 *   summary: sangini Event
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/familyCounsellingMember'
 *   responses:
 *    []
 */





// ----------------------------------------------------------------------------------------------------



/**
 * @swagger
 * definitions:
 *  eventType:
 *   type: object
 *   properties:
 *    typeName:
 *     type: string
 *     example: "Gaurav event"
 *    timeSpan:
 *     type: string
 *     example: "201809211931047823"
 *    status:
 *     type: string
 *     example: "0"
 */
  


/**
 * @swagger
 * /{baseurl}/add/eventType:
 *  post:
 *   description: event Type
 *   summary: event Type
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/eventType'
 *   responses:
 *    []
 */

