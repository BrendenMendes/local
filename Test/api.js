var request = require('request')
var base64 = require('base-64');
var utf8 = require('utf8');
var parseString = require('xml2js').parseString;

function quote(){
	var text = 'IPartner|4e25b6d662dd367573498a1e2b99160c0e57d8b9|'+JSON.stringify(new Date()).replace('"', '').replace('"', '');
	var bytes = utf8.encode(text);
	var encoded = base64.encode(bytes);
	// console.log(encoded);
	// var body = '<SaveQuote_InternationalTravel xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://IL.ESB.InternationalTravelExtension.InternationalTravel.SaveQuoteInternational"> <InternationalTravel xmlns=""> <CorelationId>05582c9e-d860-40ba-90a3-9fb43ad1fbd5</CorelationId> <CoverageType>SINGLE</CoverageType> <TripType>SINGLE</TripType> <MaxTripDuration>730</MaxTripDuration> <ResidentofIndia>No</ResidentofIndia> <TravellersInIndia>Yes</TravellersInIndia> <TravelLocation>Others</TravelLocation> <TripDuration>9</TripDuration> <VisitingonImmigrantVisa>No</VisitingonImmigrantVisa> <VisaType>NON_IMMIGRANT</VisaType> <SemiProfessionalSport>N</SemiProfessionalSport> <AdventureSport>N</AdventureSport> <EspadaDetials> <Email>adas@sdfsdf.com</Email> <SourceSystem>PATHFINDER</SourceSystem> <LoginID>0</LoginID> <TransactionDate>2018-05-17</TransactionDate> <EspadaSentTime>0001-01-01T00:00:00</EspadaSentTime> <EspadaReceivedTIme>2018-05-25T00:00:00</EspadaReceivedTIme> <PremiumError /> <UTM_Source /> <UTM_Medium /> <UTM_Campaign /> <USER_TYPE>0</USER_TYPE> <GA_TIMESTAMP>0001-01-01T00:00:00</GA_TIMESTAMP> </EspadaDetials> <IntermediaryAndAgent> <PolicyConverted>No</PolicyConverted> <PaymentMode /> <AgentID>0</AgentID> <LicenseNo /> <IpartnerUserID>0</IpartnerUserID> </IntermediaryAndAgent> <Infos /> <QuoteCreation> <Quote_Created_on>0001-01-01T00:00:00</Quote_Created_on> <Quote_Created_by>0</Quote_Created_by> <Quote_updated_on>0001-01-01T00:00:00</Quote_updated_on> <Quote_Updated_by>0</Quote_Updated_by> </QuoteCreation> <CallulatePremiumDetails> <CustomerId>0</CustomerId> <State>Others</State> <PlanCode>60787</PlanCode> <DEAL_ID>DL-4129/1484675</DEAL_ID> <CustomerHobbies>OTHERS</CustomerHobbies> <CustomerOccupation>OTHERS</CustomerOccupation> <PolicyStartDate>2018-05-17</PolicyStartDate> <PolicyEndDate>2018-05-25</PolicyEndDate> <PolicyNumber /> <InsuredDetailsList> <InsuredDetails> <InsuredName /> <InsuredDOB>1990-05-10</InsuredDOB> <RelationshipwithApplicant /> </InsuredDetails> </InsuredDetailsList> <PremiumBeforeEndorsement>1585</PremiumBeforeEndorsement> <EndorsementEffectiveDate>2018-05-17</EndorsementEffectiveDate> <CancellationDate>2018-05-25</CancellationDate> <CancellationType /> <CancellationEndorseType /> <CancellationRequired>false</CancellationRequired> <ValidPeriod /> <CancellationCharge>0</CancellationCharge> <CancellationFlag>false</CancellationFlag> <RetainPremium>1585</RetainPremium> <PremiumAmount>0</PremiumAmount> <RefundAmount>0</RefundAmount> <RetainAmount>0</RetainAmount> <RetainAmountWithCancellationCharges>0</RetainAmountWithCancellationCharges> <EndorsementType>NONPREMIUMBEARING</EndorsementType> <ManagerApproval>true</ManagerApproval> <GSTRequest> <GSTInNumber /> <GSTTaxExempted>false</GSTTaxExempted> <GSTToStateCode>27</GSTToStateCode> <GSTToState>MAHARASHTRA</GSTToState> </GSTRequest> </CallulatePremiumDetails> <MEMBER3M_50>0</MEMBER3M_50> <MEMBER3M_60>0</MEMBER3M_60> <MEMBER3M_70>0</MEMBER3M_70> <EndorsementExtensionDate>2018-05-25</EndorsementExtensionDate> <LoadingOrDiscountList> <LoadingDiscount> <LoadingDiscountCode>0</LoadingDiscountCode> <LoadingDiscountName /> <LoadingDiscountType /> </LoadingDiscount> </LoadingOrDiscountList> </InternationalTravel> </SaveQuote_InternationalTravel>'
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	var body = ''+
	'<SaveQuote_InternationalTravel xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://IL.ESB.InternationalTravelExtension.InternationalTravel.SaveQuoteInternational">'+
		'<InternationalTravel xmlns="">'+
			'<CorelationId>05582c9e-d860-40ba-90a3-9fb43ad1fbd5</CorelationId>'+
			'<CoverageType>SINGLE</CoverageType>'+
			'<TripType>SINGLE</TripType>'+
			'<MaxTripDuration>730</MaxTripDuration>'+
			'<ResidentofIndia>No</ResidentofIndia>'+
			'<TravellersInIndia>Yes</TravellersInIndia>'+
			'<TravelLocation>Others</TravelLocation>'+
			'<TripDuration>9</TripDuration>'+
			'<VisitingonImmigrantVisa>No</VisitingonImmigrantVisa>'+
			'<VisaType>NON_IMMIGRANT</VisaType>'+
			'<SemiProfessionalSport>N</SemiProfessionalSport>'+
			'<AdventureSport>N</AdventureSport>'+
			'<EspadaDetials>'+
				'<Email>adas@sdfsdf.com</Email>'+
				'<SourceSystem>PATHFINDER</SourceSystem>'+
				'<LoginID>0</LoginID>'+
				'<TransactionDate>2018-05-17</TransactionDate>'+
				'<EspadaSentTime>0001-01-01T00:00:00</EspadaSentTime>'+
				'<EspadaReceivedTIme>2018-05-25T00:00:00</EspadaReceivedTIme>'+
				'<PremiumError />'+
				'<UTM_Source />'+
				'<UTM_Medium />'+
				'<UTM_Campaign />'+
				'<USER_TYPE>0</USER_TYPE>'+
				'<GA_TIMESTAMP>0001-01-01T00:00:00</GA_TIMESTAMP>'+
			'</EspadaDetials>'+
			'<IntermediaryAndAgent>'+
				'<PolicyConverted>No</PolicyConverted>'+
				'<PaymentMode />'+
				'<AgentID>0</AgentID>'+
				'<LicenseNo />'+
				'<IpartnerUserID>0</IpartnerUserID>'+
			'</IntermediaryAndAgent>'+
			'<Infos />'+
			'<QuoteCreation>'+
				'<Quote_Created_on>0001-01-01T00:00:00</Quote_Created_on>'+
				'<Quote_Created_by>0</Quote_Created_by>'+
				'<Quote_updated_on>0001-01-01T00:00:00</Quote_updated_on>'+
				'<Quote_Updated_by>0</Quote_Updated_by>'+
			'</QuoteCreation>'+
			'<CallulatePremiumDetails>'+
				'<CustomerId>0</CustomerId>'+
				'<State>Others</State>'+
				'<PlanCode>60787</PlanCode>'+
				'<DEAL_ID>DL-4129/1484675</DEAL_ID>'+
				'<CustomerHobbies>OTHERS</CustomerHobbies>'+
				'<CustomerOccupation>OTHERS</CustomerOccupation>'+
				'<PolicyStartDate>2018-05-17</PolicyStartDate>'+
				'<PolicyEndDate>2018-05-25</PolicyEndDate>'+
				'<PolicyNumber />'+
				'<InsuredDetailsList>'+
					'<InsuredDetails>'+
						'<InsuredName />'+
						'<InsuredDOB>1990-05-10</InsuredDOB>'+
						'<RelationshipwithApplicant />'+
					'</InsuredDetails>'+
				'</InsuredDetailsList>'+
				'<PremiumBeforeEndorsement>1585</PremiumBeforeEndorsement>'+
				'<EndorsementEffectiveDate>2018-05-17</EndorsementEffectiveDate>'+
				'<CancellationDate>2018-05-25</CancellationDate>'+
				'<CancellationType />'+
				'<CancellationEndorseType />'+
				'<CancellationRequired>false</CancellationRequired>'+
				'<ValidPeriod />'+
				'<CancellationCharge>0</CancellationCharge>'+
				'<CancellationFlag>false</CancellationFlag>'+
				'<RetainPremium>1585</RetainPremium>'+
				'<PremiumAmount>0</PremiumAmount>'+
				'<RefundAmount>0</RefundAmount>'+
				'<RetainAmount>0</RetainAmount>'+
				'<RetainAmountWithCancellationCharges>0</RetainAmountWithCancellationCharges>'+
				'<EndorsementType>NONPREMIUMBEARING</EndorsementType>'+
				'<ManagerApproval>true</ManagerApproval>'+
				'<GSTRequest>'+
					'<GSTInNumber />'+
					'<GSTTaxExempted>false</GSTTaxExempted>'+
					'<GSTToStateCode>27</GSTToStateCode>'+
					'<GSTToState>MAHARASHTRA</GSTToState>'+
				'</GSTRequest>'+
			'</CallulatePremiumDetails>'+
			'<MEMBER3M_50>0</MEMBER3M_50>'+
			'<MEMBER3M_60>0</MEMBER3M_60>'+
			'<MEMBER3M_70>0</MEMBER3M_70>'+
			'<EndorsementExtensionDate>2018-05-25</EndorsementExtensionDate>'+
			'<LoadingOrDiscountList>'+
				'<LoadingDiscount>'+
					'<LoadingDiscountCode>0</LoadingDiscountCode>'+
					'<LoadingDiscountName />'+
					'<LoadingDiscountType />'+
				'</LoadingDiscount>'+
			'</LoadingOrDiscountList>'+
		'</InternationalTravel>'+
	'</SaveQuote_InternationalTravel>'
	var obj = {
        url     : 'https://cldilbizapp02.cloudapp.net:9001/ILESB/api/Proposal/SaveQuoteInternational?productCode=3717&transaction=Calculate Premium&modeOfOpreation=New',
		method  : 'POST',
        headers : {'Content-Type': 'text/xml', 'ILAuthorization': encoded},
        body 	: body
	}
	request(obj, (err, http, body)=>{
		if(err){
			console.log(err)
		}
		else{
			parseString(body, function (err, result) {
				if(result.ArrayOfResponseSaveQuote){
				    parseString(result.ArrayOfResponseSaveQuote.ResponseSaveQuote[0].QuoteDetails[0].BlazeResponseXml[0]['_'], function (err, body){
				    	console.log(body.BlazeResponseXML.InternationalTravelResponse[0])
				    }) 
				}
				else{
					console.log(result)
					throw new Error('token failure')
				} 
			})
		}
	})
}

quote()