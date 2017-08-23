import React from 'react';
import ReactGoogleSheetConnector from "react-google-sheet-connector"
 
<ReactGoogleSheetConnector
	clientid={68d36d3a2603c6addf5af0ca52f3c455e7fa7071}
    spreadsheetId={1WU0EQ45v3SKrSJtGuB8V426CKdeKoHoZ5T1H9cRTFoE}
    spinner={ <div className="loading-spinner"/> } >
    <div>
    	This content will be rendered once the data has been fetched from the spreadsheet.
    </div>
</ReactGoogleSheetConnector>
 
/*
const MyComponent = (props) => {
    return (
        <div>
            {
                props.getSheet("cohentaylor")
                    .map((row, i) =>
                        JSON.stringify(row)
                    )
            }
            console.log(SheetData)        
        </div>
    )
}
 
export default connectToSpreadsheet(MyComponent) 
*/