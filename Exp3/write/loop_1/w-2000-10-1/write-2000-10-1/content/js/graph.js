/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 237.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 5.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 6.0], [9.4, 6.0], [9.5, 6.0], [9.6, 6.0], [9.7, 6.0], [9.8, 6.0], [9.9, 6.0], [10.0, 6.0], [10.1, 6.0], [10.2, 6.0], [10.3, 6.0], [10.4, 6.0], [10.5, 6.0], [10.6, 6.0], [10.7, 6.0], [10.8, 6.0], [10.9, 6.0], [11.0, 6.0], [11.1, 6.0], [11.2, 6.0], [11.3, 6.0], [11.4, 6.0], [11.5, 6.0], [11.6, 6.0], [11.7, 6.0], [11.8, 6.0], [11.9, 6.0], [12.0, 6.0], [12.1, 6.0], [12.2, 6.0], [12.3, 6.0], [12.4, 6.0], [12.5, 6.0], [12.6, 6.0], [12.7, 6.0], [12.8, 6.0], [12.9, 6.0], [13.0, 6.0], [13.1, 6.0], [13.2, 6.0], [13.3, 6.0], [13.4, 6.0], [13.5, 6.0], [13.6, 6.0], [13.7, 6.0], [13.8, 6.0], [13.9, 6.0], [14.0, 6.0], [14.1, 6.0], [14.2, 6.0], [14.3, 6.0], [14.4, 6.0], [14.5, 6.0], [14.6, 6.0], [14.7, 6.0], [14.8, 6.0], [14.9, 6.0], [15.0, 6.0], [15.1, 6.0], [15.2, 6.0], [15.3, 6.0], [15.4, 6.0], [15.5, 6.0], [15.6, 6.0], [15.7, 6.0], [15.8, 6.0], [15.9, 6.0], [16.0, 6.0], [16.1, 6.0], [16.2, 6.0], [16.3, 6.0], [16.4, 6.0], [16.5, 6.0], [16.6, 6.0], [16.7, 6.0], [16.8, 6.0], [16.9, 6.0], [17.0, 6.0], [17.1, 6.0], [17.2, 6.0], [17.3, 6.0], [17.4, 6.0], [17.5, 6.0], [17.6, 6.0], [17.7, 6.0], [17.8, 6.0], [17.9, 6.0], [18.0, 6.0], [18.1, 6.0], [18.2, 6.0], [18.3, 6.0], [18.4, 6.0], [18.5, 6.0], [18.6, 6.0], [18.7, 6.0], [18.8, 6.0], [18.9, 6.0], [19.0, 6.0], [19.1, 6.0], [19.2, 6.0], [19.3, 6.0], [19.4, 6.0], [19.5, 6.0], [19.6, 6.0], [19.7, 6.0], [19.8, 6.0], [19.9, 6.0], [20.0, 6.0], [20.1, 6.0], [20.2, 6.0], [20.3, 6.0], [20.4, 6.0], [20.5, 6.0], [20.6, 6.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 6.0], [23.1, 6.0], [23.2, 6.0], [23.3, 6.0], [23.4, 6.0], [23.5, 6.0], [23.6, 6.0], [23.7, 6.0], [23.8, 6.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 7.0], [24.5, 7.0], [24.6, 7.0], [24.7, 7.0], [24.8, 7.0], [24.9, 7.0], [25.0, 7.0], [25.1, 7.0], [25.2, 7.0], [25.3, 7.0], [25.4, 7.0], [25.5, 7.0], [25.6, 7.0], [25.7, 7.0], [25.8, 7.0], [25.9, 7.0], [26.0, 7.0], [26.1, 7.0], [26.2, 7.0], [26.3, 7.0], [26.4, 7.0], [26.5, 7.0], [26.6, 7.0], [26.7, 7.0], [26.8, 7.0], [26.9, 7.0], [27.0, 7.0], [27.1, 7.0], [27.2, 7.0], [27.3, 7.0], [27.4, 7.0], [27.5, 7.0], [27.6, 7.0], [27.7, 7.0], [27.8, 7.0], [27.9, 7.0], [28.0, 7.0], [28.1, 7.0], [28.2, 7.0], [28.3, 7.0], [28.4, 7.0], [28.5, 7.0], [28.6, 7.0], [28.7, 7.0], [28.8, 7.0], [28.9, 7.0], [29.0, 7.0], [29.1, 7.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 7.0], [29.6, 7.0], [29.7, 7.0], [29.8, 7.0], [29.9, 7.0], [30.0, 7.0], [30.1, 7.0], [30.2, 7.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 7.0], [31.1, 7.0], [31.2, 7.0], [31.3, 7.0], [31.4, 7.0], [31.5, 7.0], [31.6, 7.0], [31.7, 7.0], [31.8, 7.0], [31.9, 7.0], [32.0, 7.0], [32.1, 7.0], [32.2, 7.0], [32.3, 7.0], [32.4, 7.0], [32.5, 7.0], [32.6, 7.0], [32.7, 7.0], [32.8, 7.0], [32.9, 7.0], [33.0, 7.0], [33.1, 7.0], [33.2, 7.0], [33.3, 7.0], [33.4, 7.0], [33.5, 7.0], [33.6, 7.0], [33.7, 7.0], [33.8, 7.0], [33.9, 7.0], [34.0, 7.0], [34.1, 7.0], [34.2, 7.0], [34.3, 7.0], [34.4, 7.0], [34.5, 7.0], [34.6, 7.0], [34.7, 7.0], [34.8, 7.0], [34.9, 7.0], [35.0, 7.0], [35.1, 7.0], [35.2, 7.0], [35.3, 7.0], [35.4, 7.0], [35.5, 7.0], [35.6, 7.0], [35.7, 7.0], [35.8, 7.0], [35.9, 7.0], [36.0, 7.0], [36.1, 7.0], [36.2, 7.0], [36.3, 7.0], [36.4, 7.0], [36.5, 7.0], [36.6, 7.0], [36.7, 7.0], [36.8, 7.0], [36.9, 7.0], [37.0, 7.0], [37.1, 7.0], [37.2, 7.0], [37.3, 7.0], [37.4, 7.0], [37.5, 7.0], [37.6, 7.0], [37.7, 7.0], [37.8, 7.0], [37.9, 7.0], [38.0, 7.0], [38.1, 7.0], [38.2, 7.0], [38.3, 7.0], [38.4, 7.0], [38.5, 7.0], [38.6, 7.0], [38.7, 7.0], [38.8, 7.0], [38.9, 7.0], [39.0, 7.0], [39.1, 7.0], [39.2, 7.0], [39.3, 7.0], [39.4, 7.0], [39.5, 7.0], [39.6, 7.0], [39.7, 7.0], [39.8, 7.0], [39.9, 7.0], [40.0, 7.0], [40.1, 7.0], [40.2, 7.0], [40.3, 7.0], [40.4, 7.0], [40.5, 7.0], [40.6, 7.0], [40.7, 7.0], [40.8, 7.0], [40.9, 7.0], [41.0, 7.0], [41.1, 7.0], [41.2, 7.0], [41.3, 7.0], [41.4, 7.0], [41.5, 7.0], [41.6, 7.0], [41.7, 7.0], [41.8, 7.0], [41.9, 7.0], [42.0, 7.0], [42.1, 7.0], [42.2, 7.0], [42.3, 7.0], [42.4, 7.0], [42.5, 7.0], [42.6, 7.0], [42.7, 7.0], [42.8, 7.0], [42.9, 7.0], [43.0, 7.0], [43.1, 7.0], [43.2, 7.0], [43.3, 7.0], [43.4, 7.0], [43.5, 7.0], [43.6, 7.0], [43.7, 7.0], [43.8, 7.0], [43.9, 7.0], [44.0, 7.0], [44.1, 7.0], [44.2, 7.0], [44.3, 7.0], [44.4, 7.0], [44.5, 7.0], [44.6, 7.0], [44.7, 7.0], [44.8, 7.0], [44.9, 7.0], [45.0, 7.0], [45.1, 7.0], [45.2, 7.0], [45.3, 7.0], [45.4, 7.0], [45.5, 7.0], [45.6, 7.0], [45.7, 7.0], [45.8, 7.0], [45.9, 7.0], [46.0, 7.0], [46.1, 7.0], [46.2, 7.0], [46.3, 7.0], [46.4, 7.0], [46.5, 7.0], [46.6, 7.0], [46.7, 7.0], [46.8, 7.0], [46.9, 7.0], [47.0, 7.0], [47.1, 7.0], [47.2, 7.0], [47.3, 7.0], [47.4, 7.0], [47.5, 7.0], [47.6, 7.0], [47.7, 7.0], [47.8, 7.0], [47.9, 7.0], [48.0, 7.0], [48.1, 7.0], [48.2, 7.0], [48.3, 7.0], [48.4, 7.0], [48.5, 7.0], [48.6, 7.0], [48.7, 7.0], [48.8, 7.0], [48.9, 7.0], [49.0, 7.0], [49.1, 7.0], [49.2, 7.0], [49.3, 7.0], [49.4, 7.0], [49.5, 7.0], [49.6, 7.0], [49.7, 7.0], [49.8, 7.0], [49.9, 7.0], [50.0, 7.0], [50.1, 7.0], [50.2, 7.0], [50.3, 7.0], [50.4, 7.0], [50.5, 7.0], [50.6, 7.0], [50.7, 7.0], [50.8, 7.0], [50.9, 7.0], [51.0, 7.0], [51.1, 7.0], [51.2, 7.0], [51.3, 7.0], [51.4, 7.0], [51.5, 7.0], [51.6, 7.0], [51.7, 7.0], [51.8, 7.0], [51.9, 7.0], [52.0, 7.0], [52.1, 7.0], [52.2, 7.0], [52.3, 7.0], [52.4, 7.0], [52.5, 7.0], [52.6, 7.0], [52.7, 7.0], [52.8, 7.0], [52.9, 7.0], [53.0, 7.0], [53.1, 7.0], [53.2, 7.0], [53.3, 7.0], [53.4, 7.0], [53.5, 7.0], [53.6, 7.0], [53.7, 7.0], [53.8, 7.0], [53.9, 7.0], [54.0, 7.0], [54.1, 7.0], [54.2, 7.0], [54.3, 7.0], [54.4, 7.0], [54.5, 7.0], [54.6, 7.0], [54.7, 7.0], [54.8, 7.0], [54.9, 7.0], [55.0, 7.0], [55.1, 7.0], [55.2, 7.0], [55.3, 7.0], [55.4, 7.0], [55.5, 7.0], [55.6, 7.0], [55.7, 7.0], [55.8, 7.0], [55.9, 7.0], [56.0, 7.0], [56.1, 7.0], [56.2, 7.0], [56.3, 7.0], [56.4, 7.0], [56.5, 7.0], [56.6, 7.0], [56.7, 7.0], [56.8, 7.0], [56.9, 7.0], [57.0, 7.0], [57.1, 7.0], [57.2, 7.0], [57.3, 7.0], [57.4, 7.0], [57.5, 7.0], [57.6, 7.0], [57.7, 7.0], [57.8, 7.0], [57.9, 7.0], [58.0, 7.0], [58.1, 7.0], [58.2, 7.0], [58.3, 7.0], [58.4, 7.0], [58.5, 7.0], [58.6, 8.0], [58.7, 8.0], [58.8, 8.0], [58.9, 8.0], [59.0, 8.0], [59.1, 8.0], [59.2, 8.0], [59.3, 8.0], [59.4, 8.0], [59.5, 8.0], [59.6, 8.0], [59.7, 8.0], [59.8, 8.0], [59.9, 8.0], [60.0, 8.0], [60.1, 8.0], [60.2, 8.0], [60.3, 8.0], [60.4, 8.0], [60.5, 8.0], [60.6, 8.0], [60.7, 8.0], [60.8, 8.0], [60.9, 8.0], [61.0, 8.0], [61.1, 8.0], [61.2, 8.0], [61.3, 8.0], [61.4, 8.0], [61.5, 8.0], [61.6, 8.0], [61.7, 8.0], [61.8, 8.0], [61.9, 8.0], [62.0, 8.0], [62.1, 8.0], [62.2, 8.0], [62.3, 8.0], [62.4, 8.0], [62.5, 8.0], [62.6, 8.0], [62.7, 8.0], [62.8, 8.0], [62.9, 8.0], [63.0, 8.0], [63.1, 8.0], [63.2, 8.0], [63.3, 8.0], [63.4, 8.0], [63.5, 8.0], [63.6, 8.0], [63.7, 8.0], [63.8, 8.0], [63.9, 8.0], [64.0, 8.0], [64.1, 8.0], [64.2, 8.0], [64.3, 8.0], [64.4, 8.0], [64.5, 8.0], [64.6, 8.0], [64.7, 8.0], [64.8, 8.0], [64.9, 8.0], [65.0, 8.0], [65.1, 8.0], [65.2, 8.0], [65.3, 8.0], [65.4, 8.0], [65.5, 8.0], [65.6, 8.0], [65.7, 8.0], [65.8, 8.0], [65.9, 8.0], [66.0, 8.0], [66.1, 8.0], [66.2, 8.0], [66.3, 8.0], [66.4, 8.0], [66.5, 8.0], [66.6, 8.0], [66.7, 8.0], [66.8, 8.0], [66.9, 8.0], [67.0, 8.0], [67.1, 8.0], [67.2, 8.0], [67.3, 8.0], [67.4, 8.0], [67.5, 8.0], [67.6, 8.0], [67.7, 8.0], [67.8, 8.0], [67.9, 8.0], [68.0, 8.0], [68.1, 8.0], [68.2, 8.0], [68.3, 8.0], [68.4, 8.0], [68.5, 8.0], [68.6, 8.0], [68.7, 8.0], [68.8, 8.0], [68.9, 8.0], [69.0, 8.0], [69.1, 8.0], [69.2, 8.0], [69.3, 8.0], [69.4, 8.0], [69.5, 8.0], [69.6, 8.0], [69.7, 8.0], [69.8, 8.0], [69.9, 8.0], [70.0, 8.0], [70.1, 8.0], [70.2, 8.0], [70.3, 8.0], [70.4, 8.0], [70.5, 8.0], [70.6, 8.0], [70.7, 8.0], [70.8, 8.0], [70.9, 8.0], [71.0, 8.0], [71.1, 8.0], [71.2, 8.0], [71.3, 8.0], [71.4, 8.0], [71.5, 8.0], [71.6, 8.0], [71.7, 8.0], [71.8, 8.0], [71.9, 8.0], [72.0, 8.0], [72.1, 8.0], [72.2, 8.0], [72.3, 8.0], [72.4, 8.0], [72.5, 8.0], [72.6, 8.0], [72.7, 8.0], [72.8, 8.0], [72.9, 8.0], [73.0, 8.0], [73.1, 8.0], [73.2, 8.0], [73.3, 8.0], [73.4, 8.0], [73.5, 8.0], [73.6, 8.0], [73.7, 8.0], [73.8, 8.0], [73.9, 8.0], [74.0, 8.0], [74.1, 8.0], [74.2, 8.0], [74.3, 8.0], [74.4, 8.0], [74.5, 8.0], [74.6, 8.0], [74.7, 8.0], [74.8, 8.0], [74.9, 8.0], [75.0, 8.0], [75.1, 8.0], [75.2, 8.0], [75.3, 8.0], [75.4, 8.0], [75.5, 8.0], [75.6, 8.0], [75.7, 8.0], [75.8, 8.0], [75.9, 8.0], [76.0, 8.0], [76.1, 8.0], [76.2, 8.0], [76.3, 8.0], [76.4, 8.0], [76.5, 8.0], [76.6, 8.0], [76.7, 8.0], [76.8, 8.0], [76.9, 8.0], [77.0, 8.0], [77.1, 8.0], [77.2, 8.0], [77.3, 8.0], [77.4, 8.0], [77.5, 8.0], [77.6, 8.0], [77.7, 8.0], [77.8, 8.0], [77.9, 9.0], [78.0, 9.0], [78.1, 9.0], [78.2, 9.0], [78.3, 9.0], [78.4, 9.0], [78.5, 9.0], [78.6, 9.0], [78.7, 9.0], [78.8, 9.0], [78.9, 9.0], [79.0, 9.0], [79.1, 9.0], [79.2, 9.0], [79.3, 9.0], [79.4, 9.0], [79.5, 9.0], [79.6, 9.0], [79.7, 9.0], [79.8, 9.0], [79.9, 9.0], [80.0, 9.0], [80.1, 9.0], [80.2, 9.0], [80.3, 9.0], [80.4, 9.0], [80.5, 9.0], [80.6, 9.0], [80.7, 9.0], [80.8, 9.0], [80.9, 9.0], [81.0, 9.0], [81.1, 9.0], [81.2, 9.0], [81.3, 9.0], [81.4, 9.0], [81.5, 9.0], [81.6, 9.0], [81.7, 9.0], [81.8, 9.0], [81.9, 9.0], [82.0, 9.0], [82.1, 9.0], [82.2, 9.0], [82.3, 9.0], [82.4, 9.0], [82.5, 9.0], [82.6, 9.0], [82.7, 9.0], [82.8, 9.0], [82.9, 9.0], [83.0, 9.0], [83.1, 9.0], [83.2, 9.0], [83.3, 9.0], [83.4, 9.0], [83.5, 9.0], [83.6, 9.0], [83.7, 9.0], [83.8, 9.0], [83.9, 9.0], [84.0, 9.0], [84.1, 9.0], [84.2, 9.0], [84.3, 9.0], [84.4, 9.0], [84.5, 9.0], [84.6, 9.0], [84.7, 9.0], [84.8, 9.0], [84.9, 9.0], [85.0, 9.0], [85.1, 9.0], [85.2, 9.0], [85.3, 10.0], [85.4, 10.0], [85.5, 10.0], [85.6, 10.0], [85.7, 10.0], [85.8, 10.0], [85.9, 10.0], [86.0, 10.0], [86.1, 10.0], [86.2, 10.0], [86.3, 10.0], [86.4, 10.0], [86.5, 10.0], [86.6, 10.0], [86.7, 10.0], [86.8, 10.0], [86.9, 10.0], [87.0, 10.0], [87.1, 10.0], [87.2, 10.0], [87.3, 10.0], [87.4, 10.0], [87.5, 10.0], [87.6, 10.0], [87.7, 10.0], [87.8, 10.0], [87.9, 10.0], [88.0, 10.0], [88.1, 10.0], [88.2, 10.0], [88.3, 10.0], [88.4, 11.0], [88.5, 11.0], [88.6, 11.0], [88.7, 11.0], [88.8, 11.0], [88.9, 11.0], [89.0, 11.0], [89.1, 11.0], [89.2, 11.0], [89.3, 11.0], [89.4, 11.0], [89.5, 11.0], [89.6, 11.0], [89.7, 11.0], [89.8, 11.0], [89.9, 11.0], [90.0, 11.0], [90.1, 12.0], [90.2, 12.0], [90.3, 12.0], [90.4, 12.0], [90.5, 12.0], [90.6, 12.0], [90.7, 12.0], [90.8, 12.0], [90.9, 12.0], [91.0, 12.0], [91.1, 12.0], [91.2, 12.0], [91.3, 12.0], [91.4, 12.0], [91.5, 12.0], [91.6, 13.0], [91.7, 13.0], [91.8, 13.0], [91.9, 13.0], [92.0, 13.0], [92.1, 13.0], [92.2, 13.0], [92.3, 13.0], [92.4, 14.0], [92.5, 14.0], [92.6, 14.0], [92.7, 14.0], [92.8, 14.0], [92.9, 15.0], [93.0, 15.0], [93.1, 15.0], [93.2, 15.0], [93.3, 15.0], [93.4, 15.0], [93.5, 16.0], [93.6, 16.0], [93.7, 16.0], [93.8, 16.0], [93.9, 16.0], [94.0, 16.0], [94.1, 17.0], [94.2, 17.0], [94.3, 18.0], [94.4, 19.0], [94.5, 19.0], [94.6, 19.0], [94.7, 21.0], [94.8, 21.0], [94.9, 22.0], [95.0, 22.0], [95.1, 23.0], [95.2, 24.0], [95.3, 25.0], [95.4, 26.0], [95.5, 27.0], [95.6, 28.0], [95.7, 28.0], [95.8, 29.0], [95.9, 31.0], [96.0, 32.0], [96.1, 33.0], [96.2, 35.0], [96.3, 37.0], [96.4, 51.0], [96.5, 62.0], [96.6, 78.0], [96.7, 83.0], [96.8, 98.0], [96.9, 99.0], [97.0, 106.0], [97.1, 107.0], [97.2, 117.0], [97.3, 124.0], [97.4, 127.0], [97.5, 131.0], [97.6, 135.0], [97.7, 144.0], [97.8, 147.0], [97.9, 148.0], [98.0, 149.0], [98.1, 155.0], [98.2, 162.0], [98.3, 166.0], [98.4, 177.0], [98.5, 182.0], [98.6, 184.0], [98.7, 196.0], [98.8, 198.0], [98.9, 203.0], [99.0, 214.0], [99.1, 216.0], [99.2, 217.0], [99.3, 217.0], [99.4, 217.0], [99.5, 219.0], [99.6, 222.0], [99.7, 229.0], [99.8, 231.0], [99.9, 234.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 23.0, "minX": 0.0, "maxY": 1940.0, "series": [{"data": [[0.0, 1940.0], [200.0, 23.0], [100.0, 37.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2000.0, "series": [{"data": [[0.0, 2000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.9322033898305084, "minX": 1.729328051E12, "maxY": 14.919282511210765, "series": [{"data": [[1.72932806E12, 1.9322033898305084], [1.729328059E12, 2.054999999999999], [1.729328052E12, 2.4949494949494944], [1.729328051E12, 14.919282511210765], [1.729328053E12, 2.2128712871287144], [1.729328054E12, 2.1399999999999975], [1.729328056E12, 2.1044776119402986], [1.729328055E12, 2.1658291457286434], [1.729328057E12, 2.3919597989949724], [1.729328058E12, 2.049751243781095]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.72932806E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 6.6046511627907005, "minX": 1.0, "maxY": 232.0, "series": [{"data": [[2.0, 7.183619550858647], [3.0, 9.586046511627902], [4.0, 13.538461538461538], [5.0, 17.476190476190474], [6.0, 16.818181818181817], [7.0, 25.0], [8.0, 28.666666666666664], [9.0, 35.0], [10.0, 90.0], [12.0, 34.0], [13.0, 52.0], [14.0, 112.5], [16.0, 89.0], [17.0, 134.66666666666666], [19.0, 155.0], [20.0, 98.0], [21.0, 83.33333333333333], [22.0, 106.0], [23.0, 68.0], [24.0, 32.0], [25.0, 99.0], [26.0, 99.0], [27.0, 69.75], [28.0, 125.0], [30.0, 124.0], [31.0, 134.0], [33.0, 135.0], [32.0, 127.0], [35.0, 148.0], [34.0, 149.5], [37.0, 158.0], [36.0, 116.8], [39.0, 147.0], [41.0, 167.75], [42.0, 192.0], [44.0, 186.5], [47.0, 184.0], [46.0, 209.5], [49.0, 215.0], [48.0, 186.0], [51.0, 231.0], [50.0, 232.0], [53.0, 214.0], [52.0, 230.0], [55.0, 223.0], [59.0, 216.5], [58.0, 227.0], [61.0, 216.0], [60.0, 219.0], [62.0, 216.0], [67.0, 213.8], [66.0, 212.5], [64.0, 217.0], [1.0, 6.6046511627907005]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[3.5955000000000052, 13.453499999999986]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 67.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 57111.0, "minX": 1.729328051E12, "maxY": 104217.0, "series": [{"data": [[1.72932806E12, 82776.0], [1.729328059E12, 93584.0], [1.729328052E12, 92624.0], [1.729328051E12, 104217.0], [1.729328053E12, 94528.0], [1.729328054E12, 93469.0], [1.729328056E12, 94068.0], [1.729328055E12, 93116.0], [1.729328057E12, 93098.0], [1.729328058E12, 94023.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72932806E12, 57111.0], [1.729328059E12, 64584.0], [1.729328052E12, 63914.0], [1.729328051E12, 71882.0], [1.729328053E12, 65238.0], [1.729328054E12, 64469.0], [1.729328056E12, 64923.0], [1.729328055E12, 64261.0], [1.729328057E12, 64243.0], [1.729328058E12, 64878.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.72932806E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 6.361581920903957, "minX": 1.729328051E12, "maxY": 59.54708520179375, "series": [{"data": [[1.72932806E12, 6.361581920903957], [1.729328059E12, 6.874999999999996], [1.729328052E12, 9.232323232323228], [1.729328051E12, 59.54708520179375], [1.729328053E12, 8.143564356435645], [1.729328054E12, 7.625000000000003], [1.729328056E12, 7.353233830845771], [1.729328055E12, 7.6633165829145735], [1.729328057E12, 8.537688442211056], [1.729328058E12, 7.099502487562193]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.72932806E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 6.333333333333333, "minX": 1.729328051E12, "maxY": 59.1300448430493, "series": [{"data": [[1.72932806E12, 6.333333333333333], [1.729328059E12, 6.819999999999999], [1.729328052E12, 9.176767676767675], [1.729328051E12, 59.1300448430493], [1.729328053E12, 8.084158415841586], [1.729328054E12, 7.55], [1.729328056E12, 7.288557213930346], [1.729328055E12, 7.582914572864321], [1.729328057E12, 8.482412060301513], [1.729328058E12, 7.019900497512437]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.72932806E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.3220338983050849, "minX": 1.729328051E12, "maxY": 4.255605381165923, "series": [{"data": [[1.72932806E12, 0.3220338983050849], [1.729328059E12, 0.45499999999999996], [1.729328052E12, 0.8434343434343438], [1.729328051E12, 4.255605381165923], [1.729328053E12, 0.6138613861386137], [1.729328054E12, 0.6700000000000002], [1.729328056E12, 0.7512437810945276], [1.729328055E12, 0.5979899497487438], [1.729328057E12, 0.6432160804020101], [1.729328058E12, 0.5522388059701493]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.72932806E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.729328051E12, "maxY": 237.0, "series": [{"data": [[1.72932806E12, 26.0], [1.729328059E12, 19.0], [1.729328052E12, 32.0], [1.729328051E12, 237.0], [1.729328053E12, 17.0], [1.729328054E12, 19.0], [1.729328056E12, 33.0], [1.729328055E12, 27.0], [1.729328057E12, 45.0], [1.729328058E12, 22.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72932806E12, 7.0], [1.729328059E12, 8.0], [1.729328052E12, 12.0], [1.729328051E12, 202.2], [1.729328053E12, 10.0], [1.729328054E12, 9.0], [1.729328056E12, 8.0], [1.729328055E12, 9.0], [1.729328057E12, 11.0], [1.729328058E12, 8.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72932806E12, 23.659999999999997], [1.729328059E12, 13.990000000000009], [1.729328052E12, 31.00999999999999], [1.729328051E12, 233.51999999999998], [1.729328053E12, 16.0], [1.729328054E12, 16.99000000000001], [1.729328056E12, 27.719999999999857], [1.729328055E12, 22.0], [1.729328057E12, 41.0], [1.729328058E12, 15.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72932806E12, 9.099999999999994], [1.729328059E12, 9.0], [1.729328052E12, 16.0], [1.729328051E12, 218.59999999999997], [1.729328053E12, 11.0], [1.729328054E12, 11.0], [1.729328056E12, 9.0], [1.729328055E12, 10.0], [1.729328057E12, 19.0], [1.729328058E12, 9.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72932806E12, 4.0], [1.729328059E12, 5.0], [1.729328052E12, 6.0], [1.729328051E12, 6.0], [1.729328053E12, 6.0], [1.729328054E12, 6.0], [1.729328056E12, 5.0], [1.729328055E12, 5.0], [1.729328057E12, 5.0], [1.729328058E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72932806E12, 6.0], [1.729328059E12, 7.0], [1.729328052E12, 8.0], [1.729328051E12, 12.0], [1.729328053E12, 8.0], [1.729328054E12, 7.0], [1.729328056E12, 7.0], [1.729328055E12, 7.0], [1.729328057E12, 7.0], [1.729328058E12, 7.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.72932806E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 6.0, "minX": 177.0, "maxY": 12.0, "series": [{"data": [[177.0, 6.0], [198.0, 8.0], [199.0, 7.0], [202.0, 8.0], [200.0, 7.0], [201.0, 7.0], [223.0, 12.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 223.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 6.0, "minX": 177.0, "maxY": 12.0, "series": [{"data": [[177.0, 6.0], [198.0, 8.0], [199.0, 7.0], [202.0, 8.0], [200.0, 7.0], [201.0, 7.0], [223.0, 12.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 223.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 176.0, "minX": 1.729328051E12, "maxY": 224.0, "series": [{"data": [[1.72932806E12, 176.0], [1.729328059E12, 200.0], [1.729328052E12, 200.0], [1.729328051E12, 224.0], [1.729328053E12, 200.0], [1.729328054E12, 200.0], [1.729328056E12, 200.0], [1.729328055E12, 200.0], [1.729328057E12, 200.0], [1.729328058E12, 200.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.72932806E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 177.0, "minX": 1.729328051E12, "maxY": 223.0, "series": [{"data": [[1.72932806E12, 177.0], [1.729328059E12, 200.0], [1.729328052E12, 198.0], [1.729328051E12, 223.0], [1.729328053E12, 202.0], [1.729328054E12, 200.0], [1.729328056E12, 201.0], [1.729328055E12, 199.0], [1.729328057E12, 199.0], [1.729328058E12, 201.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.72932806E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 177.0, "minX": 1.729328051E12, "maxY": 223.0, "series": [{"data": [[1.72932806E12, 177.0], [1.729328059E12, 200.0], [1.729328052E12, 198.0], [1.729328051E12, 223.0], [1.729328053E12, 202.0], [1.729328054E12, 200.0], [1.729328056E12, 201.0], [1.729328055E12, 199.0], [1.729328057E12, 199.0], [1.729328058E12, 201.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.72932806E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 177.0, "minX": 1.729328051E12, "maxY": 223.0, "series": [{"data": [[1.72932806E12, 177.0], [1.729328059E12, 200.0], [1.729328052E12, 198.0], [1.729328051E12, 223.0], [1.729328053E12, 202.0], [1.729328054E12, 200.0], [1.729328056E12, 201.0], [1.729328055E12, 199.0], [1.729328057E12, 199.0], [1.729328058E12, 201.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.72932806E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

