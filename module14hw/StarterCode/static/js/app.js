d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(function(data) {
    console.log(data);
    // do something with the data
        // Get the first sample ID from the metadata
        var sampleId = data.names[0];

        // Get the sample data for the selected sample ID
        var sampleData = data.samples.filter(sample => sample.id === sampleId)[0];
    
        // Get the top 10 OTUs based on the sample values
        var top10OTUs = sampleData.otu_ids.slice(0, 10).reverse();
        var top10Values = sampleData.sample_values.slice(0, 10).reverse();
        var top10Labels = sampleData.otu_labels.slice(0, 10).reverse();
    
        // Create the horizontal bar chart using Plotly
        var trace1 = {
          x: top10Values,
          y: top10OTUs.map(id => "OTU " + id),
          text: top10Labels,
          type: "bar",
          orientation: "h"
        };
    
        var data = [trace1];
    
        var layout = {
          title: "Top 10 OTUs",
          xaxis: { title: "Sample Values" },
          yaxis: { title: "OTU IDs" }
        };
    
        Plotly.newPlot("bar", data, layout);



        //buble chart
            // Create the trace for the bubble chart
        var trace2 = {
            x: sampleData.otu_ids,
            y: sampleData.sample_values,
            text: sampleData.otu_labels,
            mode: "markers",
            marker: {
              size: sampleData.sample_values,
              color: sampleData.otu_ids,
              colorscale: "Earth"
            }
          };
      
          var data = [trace2];
      
          var layout = {
            title: "Bubble Chart",
            xaxis: { title: "OTU IDs" },
            yaxis: { title: "Sample Values" }
          };
      
          Plotly.newPlot("bubble", data, layout);
        })
        .catch(function(error) {
          console.log(error);
        });
        
    



          






          



    


  
