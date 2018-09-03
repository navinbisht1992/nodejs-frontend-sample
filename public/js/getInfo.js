function getDetail () {

    // Request to get details of all user.
    $.ajax({
        "url": "http://localhost:4000/v1/detail",
        "method": "GET"
    })
    .then( result => {
        // On success using table to display data.
        // This table is dynamic.
        let table = `<div class="alert alert-success" role="alert">
                        Details fetched successfully.
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>`;

        let headers = [];

        // Setting dynamic headers to ease work at frontend in case field changes
        for ( let key in result[0] ) headers.push(key);
        for ( let h of headers ) table += `<th scope="col">` + h + `</th>`;

        table += `          </tr>
                        </thead>
                        <tbody>`;
        let i = 1;

        // Dynaic rows of table based upon headers.
        for(let row of result) {
            table += `      <tr>
                                <th scope="row">` + i + `</th>`;

            for (let key of headers) table += `<td>` + row[key] + `</td>`;
            
            table += `      </tr>`;
            i++;
        }

        table += `      </tbody>
                    </table>`;

        // Loading dynamic table into our static HTML page.
        $("#showDetails").html(table);
    })
    .catch( err => {
        // If error setting dynamic error
        let data = `<label class="alert alert-warning">Unable to fetch details</label>`;

        // Loading dynamic error into our static HTML page
        $("#showDetails").html(data);
    })

}