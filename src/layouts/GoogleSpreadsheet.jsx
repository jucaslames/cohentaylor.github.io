import React from 'react';
import ReactGoogleSheetConnector from "react-google-sheet-connector"
 
<ReactGoogleSheetConnector
	clientid={104684679957513057493}
    spreadsheetId={1WU0EQ45v3SKrSJtGuB8V426CKdeKoHoZ5T1H9cRTFoE}
    spinner={ <div className="loading-spinner"/> } >
    <div>
    	This content will be rendered once the data has been fetched from the spreadsheet.
    </div>
</ReactGoogleSheetConnector>
 
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