jQuery(document).ready( function() {

	//Initialize variables.
	var tableBody = jQuery('tbody');
	var tableHead = jQuery('th');
	var tableRows = jQuery('tbody tr.data');
	var tableCells = jQuery('td');
	var resultsCells = jQuery('.results td');
	var button = jQuery('button');
	var sum = 0;
	var product = 0;
	var average = 0;
	var colResult0 = 0;
	var colResult1 = 0;
	var colResult2 = 0;
	var colResult3 = 0;
	var childCell = '';
	var columnCount = '';


	button.click( function() {

		//set up variables after click
		colResult0 = 0;
		colResult1 = 0;
		colResult2 = 0;
		colResult3 = 0;
		sum = 0;
		product = 0;
		average = 0;
		clickedButton = jQuery(this);
		//Temporary Arrays to hold column data before operations
		var tempArray0 = [];
		var tempArray1 = [];
		var tempArray2 = [];
		var tempArray3 = [];


		//Turn on the appropriate setting
		if (clickedButton.attr('id') == 'sum') {
			sum = 1;
		}
		else if (clickedButton.attr('id') == 'product') {
			product = 1;
		}
		else if (clickedButton.attr('id') == 'average') {
			average = 1;
		}

		//Place column data in temp arrays
		tableRows.each( function() {
			for (i = 0; i < 4; i++) {
				childCell = parseInt(jQuery(this).find('td').eq(i).text());
				if (i == 0) {
					tempArray0.push(childCell);
				}
				else if (i == 1) {
					tempArray1.push(childCell);
				}
				else if (i == 2) {
					tempArray2.push(childCell);
				}
				else {
					tempArray3.push(childCell);
				}
			}
		});

		//Sum case: append to results column
		if (sum == 1) {
			for (i = 0; i < 4; i++) {
				colResult0 += tempArray0[i];		
			}
			resultsCells.eq(0).text(colResult0);
			for (i = 0; i < 4; i++) {
				colResult1 += tempArray1[i];
			}
			resultsCells.eq(1).text(colResult1);
			for (i = 0; i < 4; i++) {
				colResult2 += tempArray2[i];
			}
			resultsCells.eq(2).text(colResult2);
			for (i = 0; i < 4; i++) {
				colResult3 += tempArray3[i];
			}
			resultsCells.eq(3).text(colResult3);
		}
		//Product case: append to results column
		else if (product == 1) {
			colResult0 = 1;
			colResult1 = 1;
			colResult2 = 1;
			colResult3 = 1;

			for (i = 0; i < 4; i++) {
				colResult0 *= tempArray0[i];
			}
			resultsCells.eq(0).text(colResult0);
			for (i = 0; i < 4; i++) {
				colResult1 *= tempArray1[i];
			}
			resultsCells.eq(1).text(colResult1);
			for (i = 0; i < 4; i++) {
				colResult2 *= tempArray2[i];
			}
			resultsCells.eq(2).text(colResult2);
			for (i = 0; i < 4; i++) {
				colResult3 *= tempArray3[i];
			}
			resultsCells.eq(3).text(colResult3);
		}
		//Average case: append to results column
		else if (average == 1) {
			for (i = 0; i < 4; i++) {
				colResult0 += tempArray0[i];	
			}
			colResult0 = Math.round(colResult0 / 4);
			resultsCells.eq(0).text(colResult0);
			for (i = 0; i < 4; i++) {
				colResult1 += tempArray1[i];
			}
			colResult1 = Math.round(colResult1 / 4);
			resultsCells.eq(1).text(colResult1);
			for (i = 0; i < 4; i++) {
				colResult2 += tempArray2[i];
			}
			colResult2 = Math.round(colResult2 / 4);
			resultsCells.eq(2).text(colResult2);
			for (i = 0; i < 4; i++) {
				colResult3 += tempArray3[i];
			}
			colResult3 = Math.round(colResult3 / 4);
			resultsCells.eq(3).text(colResult3);
		}

	});
});

