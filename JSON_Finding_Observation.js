var FindingObservation={
  "resourceType": "Observation",
  "id": "51870e95-691b-489b-8b54-adc32ee131ee",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2023-03-21T22:09:12.343+08:00",
    "source": "#0uNKFzbRLMB1zxAp",
    "profile": [ "https://203.64.84.150:58443/r5/fhir/StructureDefinition/ImageFindingObservationSDR4" ]
  },
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">This is an image finding measurement</div>"
  },
 "extension": [ {
    "url": "https://203.64.84.150:58443/r5/fhir/StructureDefinition/FindingIDR4",
    "valueIdentifier": {
      "system": "https://docs.google.com/spreadsheets/d/1BBBZZbEO82wkvLbHtbpa4ihdFTMoIG0KQGH5bgUoo70/edit#gid=896973653",
      "value": "S2023-00135"
    }
  } ],
  "status": "final",
  "category": [ {
    "coding": [ {
      "system": "http://terminology.hl7.org/CodeSystem/observation-category",
      "code": "imaging",
      "display": "Imaging"
    } ]
  } ],
  "code": {
    "coding": [ {
      "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
      "code": "image.finding",
      "display": "Image finding"
    } ]
  },
    "subject": {
      "reference": "Patient/10328901",
      "display": "呂昱萱"
    },
    "effectiveDateTime": "2015-02-07T13:28:17-05:00",
    "performer": [ {
      "reference": "Practitioner/10328911",
      "display": "Dr. Adam Careful"
    } ],
    "bodySite": {
      "coding": [ {
        "system": "http://snomed.info/sct",
        "code": "7769000",
        "display": "Right foot"
      } ]
    },
    "component": [ {
      "code": {
        "coding": [ {
          "system": "https://203.64.84.150:58443/r5/fhir/CodeSystem/8f414151-bf5f-46ce-94fe-f96d9e867d29",
          "code": "image.finding.keyimage"
        } ]
      },
      "valueString": "https://203.64.84.150:58443/r5/fhir/DocumentReference/665f781e-5666-4e22-a3c9-638d23ca1043"
    }, 
    {
      "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "pharyngeal.mucosa"
        } ]
      },
    },
    {
      "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "oral.cavity"
        } ]
      },
    },
    {
      "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "larynx"
        } ]
      },
    },
    {
      "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "lymph.nodes"
        } ]
      },
    },
    {
      "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "salivary.glands"
        } ]
      },
    },
    {
      "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "thyroid"
        } ]
      },
    },
    {
      "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "vassels.carotid.space"
        } ]
      },
    },
    {
        "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "bones"
        } ]
      },
    },
    {
      "code": {
        "coding": [ {
          "system": "Codesystem/110316119",
          "code": "other"
        } ]
      },
    }
   ]
}


function Submit(){
FindingObservation.component[1].valueString=document.getElementsByName("pharyngeal mucosa")[0].value;
FindingObservation.component[2].valueString=document.getElementsByName("oral cavity")[0].value;
FindingObservation.component[3].valueString=document.getElementsByName("larynx")[0].value;
FindingObservation.component[4].valueString=document.getElementsByName("nodes")[0].value;
FindingObservation.component[5].valueString=document.getElementsByName("salivary glands")[0].value;
FindingObservation.component[6].valueString=document.getElementsByName("thyroid")[0].value;
FindingObservation.component[7].valueString=document.getElementsByName("vessels and carotid space")[0].value;
FindingObservation.component[8].valueString=document.getElementsByName("bones")[0].value;
FindingObservation.component[9].valueString=document.getElementsByName("other")[0].value;
postData(FindingObservation,"Observation")
}

function postData(jsonString, type) {
    var xhttp = new XMLHttpRequest();
    var fhirUrl= "https://hapi.fhir.org/baseR4";
    var url = fhirUrl +"/"+type;
    xhttp.open("POST", url, false);
    xhttp.setRequestHeader("Content-type", 'application/json+fhir');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) // && this.status == 201) 
        {
            ret = JSON.parse(this.responseText);
            alert(this.responseText);
        }
    };
    var data = JSON.stringify(jsonString);
    xhttp.send(data);
}