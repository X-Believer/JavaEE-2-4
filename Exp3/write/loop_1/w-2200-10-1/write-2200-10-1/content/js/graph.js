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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 1071.0, "series": [{"data": [[0.0, 5.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 6.0], [5.8, 6.0], [5.9, 6.0], [6.0, 6.0], [6.1, 6.0], [6.2, 6.0], [6.3, 6.0], [6.4, 6.0], [6.5, 6.0], [6.6, 6.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 6.0], [8.2, 6.0], [8.3, 6.0], [8.4, 6.0], [8.5, 6.0], [8.6, 6.0], [8.7, 6.0], [8.8, 6.0], [8.9, 6.0], [9.0, 6.0], [9.1, 6.0], [9.2, 6.0], [9.3, 6.0], [9.4, 6.0], [9.5, 6.0], [9.6, 6.0], [9.7, 6.0], [9.8, 6.0], [9.9, 6.0], [10.0, 6.0], [10.1, 6.0], [10.2, 6.0], [10.3, 6.0], [10.4, 6.0], [10.5, 6.0], [10.6, 6.0], [10.7, 6.0], [10.8, 6.0], [10.9, 6.0], [11.0, 6.0], [11.1, 6.0], [11.2, 6.0], [11.3, 6.0], [11.4, 6.0], [11.5, 6.0], [11.6, 6.0], [11.7, 6.0], [11.8, 6.0], [11.9, 6.0], [12.0, 6.0], [12.1, 6.0], [12.2, 6.0], [12.3, 6.0], [12.4, 6.0], [12.5, 6.0], [12.6, 6.0], [12.7, 6.0], [12.8, 6.0], [12.9, 6.0], [13.0, 6.0], [13.1, 6.0], [13.2, 6.0], [13.3, 6.0], [13.4, 6.0], [13.5, 6.0], [13.6, 6.0], [13.7, 6.0], [13.8, 6.0], [13.9, 6.0], [14.0, 6.0], [14.1, 6.0], [14.2, 6.0], [14.3, 6.0], [14.4, 6.0], [14.5, 6.0], [14.6, 6.0], [14.7, 6.0], [14.8, 6.0], [14.9, 6.0], [15.0, 6.0], [15.1, 6.0], [15.2, 6.0], [15.3, 6.0], [15.4, 6.0], [15.5, 6.0], [15.6, 6.0], [15.7, 6.0], [15.8, 6.0], [15.9, 6.0], [16.0, 6.0], [16.1, 6.0], [16.2, 6.0], [16.3, 6.0], [16.4, 6.0], [16.5, 6.0], [16.6, 6.0], [16.7, 6.0], [16.8, 6.0], [16.9, 6.0], [17.0, 6.0], [17.1, 6.0], [17.2, 6.0], [17.3, 6.0], [17.4, 6.0], [17.5, 6.0], [17.6, 7.0], [17.7, 7.0], [17.8, 7.0], [17.9, 7.0], [18.0, 7.0], [18.1, 7.0], [18.2, 7.0], [18.3, 7.0], [18.4, 7.0], [18.5, 7.0], [18.6, 7.0], [18.7, 7.0], [18.8, 7.0], [18.9, 7.0], [19.0, 7.0], [19.1, 7.0], [19.2, 7.0], [19.3, 7.0], [19.4, 7.0], [19.5, 7.0], [19.6, 7.0], [19.7, 7.0], [19.8, 7.0], [19.9, 7.0], [20.0, 7.0], [20.1, 7.0], [20.2, 7.0], [20.3, 7.0], [20.4, 7.0], [20.5, 7.0], [20.6, 7.0], [20.7, 7.0], [20.8, 7.0], [20.9, 7.0], [21.0, 7.0], [21.1, 7.0], [21.2, 7.0], [21.3, 7.0], [21.4, 7.0], [21.5, 7.0], [21.6, 7.0], [21.7, 7.0], [21.8, 7.0], [21.9, 7.0], [22.0, 7.0], [22.1, 7.0], [22.2, 7.0], [22.3, 7.0], [22.4, 7.0], [22.5, 7.0], [22.6, 7.0], [22.7, 7.0], [22.8, 7.0], [22.9, 7.0], [23.0, 7.0], [23.1, 7.0], [23.2, 7.0], [23.3, 7.0], [23.4, 7.0], [23.5, 7.0], [23.6, 7.0], [23.7, 7.0], [23.8, 7.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 7.0], [24.5, 7.0], [24.6, 7.0], [24.7, 7.0], [24.8, 7.0], [24.9, 8.0], [25.0, 8.0], [25.1, 8.0], [25.2, 8.0], [25.3, 8.0], [25.4, 8.0], [25.5, 8.0], [25.6, 8.0], [25.7, 8.0], [25.8, 8.0], [25.9, 8.0], [26.0, 8.0], [26.1, 8.0], [26.2, 8.0], [26.3, 8.0], [26.4, 8.0], [26.5, 8.0], [26.6, 8.0], [26.7, 8.0], [26.8, 8.0], [26.9, 8.0], [27.0, 8.0], [27.1, 8.0], [27.2, 8.0], [27.3, 8.0], [27.4, 8.0], [27.5, 8.0], [27.6, 9.0], [27.7, 9.0], [27.8, 9.0], [27.9, 9.0], [28.0, 9.0], [28.1, 9.0], [28.2, 9.0], [28.3, 9.0], [28.4, 9.0], [28.5, 9.0], [28.6, 9.0], [28.7, 9.0], [28.8, 9.0], [28.9, 9.0], [29.0, 9.0], [29.1, 9.0], [29.2, 9.0], [29.3, 9.0], [29.4, 10.0], [29.5, 10.0], [29.6, 10.0], [29.7, 10.0], [29.8, 10.0], [29.9, 10.0], [30.0, 10.0], [30.1, 10.0], [30.2, 10.0], [30.3, 10.0], [30.4, 10.0], [30.5, 11.0], [30.6, 11.0], [30.7, 11.0], [30.8, 11.0], [30.9, 11.0], [31.0, 11.0], [31.1, 11.0], [31.2, 11.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 13.0], [32.3, 13.0], [32.4, 13.0], [32.5, 13.0], [32.6, 13.0], [32.7, 13.0], [32.8, 14.0], [32.9, 14.0], [33.0, 14.0], [33.1, 14.0], [33.2, 14.0], [33.3, 14.0], [33.4, 14.0], [33.5, 15.0], [33.6, 15.0], [33.7, 15.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 16.0], [34.2, 16.0], [34.3, 16.0], [34.4, 16.0], [34.5, 16.0], [34.6, 17.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 18.0], [35.2, 18.0], [35.3, 19.0], [35.4, 19.0], [35.5, 19.0], [35.6, 20.0], [35.7, 20.0], [35.8, 20.0], [35.9, 20.0], [36.0, 20.0], [36.1, 21.0], [36.2, 21.0], [36.3, 21.0], [36.4, 21.0], [36.5, 21.0], [36.6, 22.0], [36.7, 22.0], [36.8, 22.0], [36.9, 23.0], [37.0, 23.0], [37.1, 23.0], [37.2, 23.0], [37.3, 23.0], [37.4, 24.0], [37.5, 24.0], [37.6, 24.0], [37.7, 24.0], [37.8, 25.0], [37.9, 25.0], [38.0, 25.0], [38.1, 25.0], [38.2, 26.0], [38.3, 26.0], [38.4, 26.0], [38.5, 27.0], [38.6, 27.0], [38.7, 27.0], [38.8, 27.0], [38.9, 27.0], [39.0, 28.0], [39.1, 28.0], [39.2, 29.0], [39.3, 29.0], [39.4, 29.0], [39.5, 29.0], [39.6, 30.0], [39.7, 30.0], [39.8, 30.0], [39.9, 31.0], [40.0, 31.0], [40.1, 32.0], [40.2, 32.0], [40.3, 32.0], [40.4, 33.0], [40.5, 33.0], [40.6, 33.0], [40.7, 33.0], [40.8, 33.0], [40.9, 34.0], [41.0, 34.0], [41.1, 35.0], [41.2, 35.0], [41.3, 35.0], [41.4, 35.0], [41.5, 36.0], [41.6, 36.0], [41.7, 36.0], [41.8, 37.0], [41.9, 37.0], [42.0, 37.0], [42.1, 38.0], [42.2, 38.0], [42.3, 39.0], [42.4, 39.0], [42.5, 39.0], [42.6, 40.0], [42.7, 40.0], [42.8, 41.0], [42.9, 41.0], [43.0, 41.0], [43.1, 41.0], [43.2, 42.0], [43.3, 42.0], [43.4, 43.0], [43.5, 43.0], [43.6, 44.0], [43.7, 44.0], [43.8, 45.0], [43.9, 45.0], [44.0, 46.0], [44.1, 46.0], [44.2, 47.0], [44.3, 47.0], [44.4, 48.0], [44.5, 48.0], [44.6, 49.0], [44.7, 49.0], [44.8, 49.0], [44.9, 50.0], [45.0, 50.0], [45.1, 50.0], [45.2, 51.0], [45.3, 51.0], [45.4, 51.0], [45.5, 52.0], [45.6, 52.0], [45.7, 53.0], [45.8, 53.0], [45.9, 54.0], [46.0, 54.0], [46.1, 55.0], [46.2, 55.0], [46.3, 55.0], [46.4, 56.0], [46.5, 56.0], [46.6, 57.0], [46.7, 57.0], [46.8, 57.0], [46.9, 58.0], [47.0, 58.0], [47.1, 59.0], [47.2, 59.0], [47.3, 61.0], [47.4, 61.0], [47.5, 61.0], [47.6, 62.0], [47.7, 62.0], [47.8, 62.0], [47.9, 62.0], [48.0, 63.0], [48.1, 63.0], [48.2, 63.0], [48.3, 64.0], [48.4, 64.0], [48.5, 65.0], [48.6, 65.0], [48.7, 65.0], [48.8, 66.0], [48.9, 66.0], [49.0, 66.0], [49.1, 67.0], [49.2, 67.0], [49.3, 68.0], [49.4, 69.0], [49.5, 69.0], [49.6, 70.0], [49.7, 70.0], [49.8, 70.0], [49.9, 71.0], [50.0, 71.0], [50.1, 72.0], [50.2, 72.0], [50.3, 73.0], [50.4, 74.0], [50.5, 74.0], [50.6, 74.0], [50.7, 75.0], [50.8, 76.0], [50.9, 77.0], [51.0, 77.0], [51.1, 78.0], [51.2, 79.0], [51.3, 80.0], [51.4, 81.0], [51.5, 81.0], [51.6, 82.0], [51.7, 82.0], [51.8, 82.0], [51.9, 83.0], [52.0, 83.0], [52.1, 84.0], [52.2, 85.0], [52.3, 86.0], [52.4, 86.0], [52.5, 86.0], [52.6, 86.0], [52.7, 87.0], [52.8, 88.0], [52.9, 89.0], [53.0, 89.0], [53.1, 90.0], [53.2, 90.0], [53.3, 91.0], [53.4, 93.0], [53.5, 94.0], [53.6, 94.0], [53.7, 95.0], [53.8, 95.0], [53.9, 95.0], [54.0, 96.0], [54.1, 97.0], [54.2, 98.0], [54.3, 99.0], [54.4, 100.0], [54.5, 100.0], [54.6, 101.0], [54.7, 102.0], [54.8, 102.0], [54.9, 103.0], [55.0, 104.0], [55.1, 107.0], [55.2, 108.0], [55.3, 109.0], [55.4, 110.0], [55.5, 110.0], [55.6, 112.0], [55.7, 112.0], [55.8, 113.0], [55.9, 114.0], [56.0, 115.0], [56.1, 115.0], [56.2, 116.0], [56.3, 117.0], [56.4, 119.0], [56.5, 119.0], [56.6, 121.0], [56.7, 121.0], [56.8, 121.0], [56.9, 122.0], [57.0, 122.0], [57.1, 123.0], [57.2, 124.0], [57.3, 125.0], [57.4, 126.0], [57.5, 127.0], [57.6, 128.0], [57.7, 129.0], [57.8, 131.0], [57.9, 132.0], [58.0, 133.0], [58.1, 135.0], [58.2, 136.0], [58.3, 137.0], [58.4, 137.0], [58.5, 139.0], [58.6, 140.0], [58.7, 140.0], [58.8, 140.0], [58.9, 141.0], [59.0, 142.0], [59.1, 142.0], [59.2, 143.0], [59.3, 144.0], [59.4, 145.0], [59.5, 146.0], [59.6, 148.0], [59.7, 149.0], [59.8, 149.0], [59.9, 150.0], [60.0, 152.0], [60.1, 153.0], [60.2, 153.0], [60.3, 154.0], [60.4, 154.0], [60.5, 155.0], [60.6, 157.0], [60.7, 157.0], [60.8, 157.0], [60.9, 158.0], [61.0, 159.0], [61.1, 159.0], [61.2, 160.0], [61.3, 160.0], [61.4, 161.0], [61.5, 162.0], [61.6, 163.0], [61.7, 164.0], [61.8, 165.0], [61.9, 166.0], [62.0, 168.0], [62.1, 168.0], [62.2, 169.0], [62.3, 170.0], [62.4, 171.0], [62.5, 172.0], [62.6, 173.0], [62.7, 175.0], [62.8, 176.0], [62.9, 177.0], [63.0, 177.0], [63.1, 179.0], [63.2, 179.0], [63.3, 180.0], [63.4, 180.0], [63.5, 180.0], [63.6, 181.0], [63.7, 181.0], [63.8, 182.0], [63.9, 183.0], [64.0, 184.0], [64.1, 185.0], [64.2, 186.0], [64.3, 188.0], [64.4, 190.0], [64.5, 190.0], [64.6, 192.0], [64.7, 193.0], [64.8, 193.0], [64.9, 195.0], [65.0, 196.0], [65.1, 198.0], [65.2, 198.0], [65.3, 199.0], [65.4, 199.0], [65.5, 200.0], [65.6, 202.0], [65.7, 203.0], [65.8, 203.0], [65.9, 204.0], [66.0, 205.0], [66.1, 206.0], [66.2, 207.0], [66.3, 208.0], [66.4, 208.0], [66.5, 209.0], [66.6, 210.0], [66.7, 211.0], [66.8, 211.0], [66.9, 213.0], [67.0, 214.0], [67.1, 214.0], [67.2, 215.0], [67.3, 216.0], [67.4, 216.0], [67.5, 218.0], [67.6, 219.0], [67.7, 220.0], [67.8, 221.0], [67.9, 222.0], [68.0, 223.0], [68.1, 225.0], [68.2, 226.0], [68.3, 227.0], [68.4, 227.0], [68.5, 227.0], [68.6, 229.0], [68.7, 229.0], [68.8, 230.0], [68.9, 232.0], [69.0, 233.0], [69.1, 234.0], [69.2, 235.0], [69.3, 236.0], [69.4, 237.0], [69.5, 238.0], [69.6, 239.0], [69.7, 240.0], [69.8, 241.0], [69.9, 241.0], [70.0, 242.0], [70.1, 244.0], [70.2, 244.0], [70.3, 246.0], [70.4, 248.0], [70.5, 248.0], [70.6, 249.0], [70.7, 249.0], [70.8, 250.0], [70.9, 253.0], [71.0, 253.0], [71.1, 255.0], [71.2, 256.0], [71.3, 256.0], [71.4, 257.0], [71.5, 258.0], [71.6, 260.0], [71.7, 261.0], [71.8, 262.0], [71.9, 264.0], [72.0, 264.0], [72.1, 267.0], [72.2, 268.0], [72.3, 269.0], [72.4, 269.0], [72.5, 270.0], [72.6, 273.0], [72.7, 274.0], [72.8, 274.0], [72.9, 275.0], [73.0, 276.0], [73.1, 278.0], [73.2, 279.0], [73.3, 280.0], [73.4, 280.0], [73.5, 280.0], [73.6, 284.0], [73.7, 286.0], [73.8, 286.0], [73.9, 287.0], [74.0, 287.0], [74.1, 289.0], [74.2, 289.0], [74.3, 290.0], [74.4, 290.0], [74.5, 291.0], [74.6, 292.0], [74.7, 295.0], [74.8, 295.0], [74.9, 296.0], [75.0, 297.0], [75.1, 298.0], [75.2, 300.0], [75.3, 301.0], [75.4, 301.0], [75.5, 302.0], [75.6, 303.0], [75.7, 304.0], [75.8, 305.0], [75.9, 306.0], [76.0, 306.0], [76.1, 307.0], [76.2, 309.0], [76.3, 310.0], [76.4, 310.0], [76.5, 311.0], [76.6, 313.0], [76.7, 313.0], [76.8, 316.0], [76.9, 318.0], [77.0, 319.0], [77.1, 322.0], [77.2, 322.0], [77.3, 323.0], [77.4, 324.0], [77.5, 324.0], [77.6, 326.0], [77.7, 327.0], [77.8, 328.0], [77.9, 329.0], [78.0, 330.0], [78.1, 331.0], [78.2, 331.0], [78.3, 332.0], [78.4, 333.0], [78.5, 335.0], [78.6, 336.0], [78.7, 340.0], [78.8, 340.0], [78.9, 341.0], [79.0, 343.0], [79.1, 344.0], [79.2, 345.0], [79.3, 345.0], [79.4, 346.0], [79.5, 347.0], [79.6, 349.0], [79.7, 350.0], [79.8, 350.0], [79.9, 352.0], [80.0, 353.0], [80.1, 354.0], [80.2, 354.0], [80.3, 356.0], [80.4, 357.0], [80.5, 357.0], [80.6, 358.0], [80.7, 358.0], [80.8, 360.0], [80.9, 361.0], [81.0, 361.0], [81.1, 363.0], [81.2, 363.0], [81.3, 364.0], [81.4, 365.0], [81.5, 366.0], [81.6, 368.0], [81.7, 370.0], [81.8, 371.0], [81.9, 373.0], [82.0, 374.0], [82.1, 375.0], [82.2, 379.0], [82.3, 379.0], [82.4, 380.0], [82.5, 381.0], [82.6, 383.0], [82.7, 385.0], [82.8, 386.0], [82.9, 387.0], [83.0, 387.0], [83.1, 388.0], [83.2, 388.0], [83.3, 390.0], [83.4, 391.0], [83.5, 391.0], [83.6, 393.0], [83.7, 393.0], [83.8, 394.0], [83.9, 396.0], [84.0, 398.0], [84.1, 401.0], [84.2, 401.0], [84.3, 403.0], [84.4, 404.0], [84.5, 406.0], [84.6, 406.0], [84.7, 408.0], [84.8, 409.0], [84.9, 410.0], [85.0, 411.0], [85.1, 414.0], [85.2, 414.0], [85.3, 415.0], [85.4, 417.0], [85.5, 418.0], [85.6, 419.0], [85.7, 419.0], [85.8, 421.0], [85.9, 421.0], [86.0, 422.0], [86.1, 424.0], [86.2, 425.0], [86.3, 428.0], [86.4, 428.0], [86.5, 429.0], [86.6, 429.0], [86.7, 431.0], [86.8, 432.0], [86.9, 433.0], [87.0, 436.0], [87.1, 438.0], [87.2, 439.0], [87.3, 440.0], [87.4, 442.0], [87.5, 443.0], [87.6, 444.0], [87.7, 445.0], [87.8, 445.0], [87.9, 446.0], [88.0, 449.0], [88.1, 451.0], [88.2, 452.0], [88.3, 453.0], [88.4, 455.0], [88.5, 456.0], [88.6, 457.0], [88.7, 459.0], [88.8, 460.0], [88.9, 462.0], [89.0, 463.0], [89.1, 466.0], [89.2, 466.0], [89.3, 467.0], [89.4, 468.0], [89.5, 469.0], [89.6, 470.0], [89.7, 472.0], [89.8, 474.0], [89.9, 474.0], [90.0, 475.0], [90.1, 477.0], [90.2, 478.0], [90.3, 480.0], [90.4, 482.0], [90.5, 482.0], [90.6, 483.0], [90.7, 484.0], [90.8, 486.0], [90.9, 487.0], [91.0, 488.0], [91.1, 491.0], [91.2, 492.0], [91.3, 493.0], [91.4, 494.0], [91.5, 496.0], [91.6, 497.0], [91.7, 499.0], [91.8, 500.0], [91.9, 502.0], [92.0, 503.0], [92.1, 504.0], [92.2, 510.0], [92.3, 511.0], [92.4, 512.0], [92.5, 513.0], [92.6, 515.0], [92.7, 516.0], [92.8, 517.0], [92.9, 518.0], [93.0, 518.0], [93.1, 520.0], [93.2, 522.0], [93.3, 523.0], [93.4, 524.0], [93.5, 525.0], [93.6, 527.0], [93.7, 528.0], [93.8, 528.0], [93.9, 531.0], [94.0, 532.0], [94.1, 536.0], [94.2, 538.0], [94.3, 540.0], [94.4, 542.0], [94.5, 544.0], [94.6, 547.0], [94.7, 548.0], [94.8, 550.0], [94.9, 553.0], [95.0, 554.0], [95.1, 558.0], [95.2, 560.0], [95.3, 563.0], [95.4, 573.0], [95.5, 575.0], [95.6, 581.0], [95.7, 586.0], [95.8, 589.0], [95.9, 595.0], [96.0, 596.0], [96.1, 601.0], [96.2, 603.0], [96.3, 607.0], [96.4, 610.0], [96.5, 611.0], [96.6, 616.0], [96.7, 617.0], [96.8, 621.0], [96.9, 623.0], [97.0, 629.0], [97.1, 632.0], [97.2, 634.0], [97.3, 637.0], [97.4, 640.0], [97.5, 646.0], [97.6, 651.0], [97.7, 654.0], [97.8, 655.0], [97.9, 659.0], [98.0, 661.0], [98.1, 664.0], [98.2, 668.0], [98.3, 670.0], [98.4, 677.0], [98.5, 679.0], [98.6, 684.0], [98.7, 688.0], [98.8, 693.0], [98.9, 695.0], [99.0, 699.0], [99.1, 710.0], [99.2, 714.0], [99.3, 719.0], [99.4, 723.0], [99.5, 728.0], [99.6, 743.0], [99.7, 748.0], [99.8, 904.0], [99.9, 1056.0], [100.0, 1071.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1196.0, "series": [{"data": [[0.0, 1196.0], [300.0, 195.0], [600.0, 64.0], [700.0, 17.0], [200.0, 215.0], [400.0, 170.0], [100.0, 243.0], [900.0, 2.0], [500.0, 95.0], [1000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 180.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2020.0, "series": [{"data": [[0.0, 2020.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 180.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.4190476190476202, "minX": 1.729328432E12, "maxY": 92.02857142857138, "series": [{"data": [[1.729328442E12, 4.43801652892562], [1.729328432E12, 29.133093525179863], [1.729328441E12, 3.4190476190476202], [1.729328439E12, 92.02857142857138], [1.72932844E12, 64.1277258566979], [1.729328438E12, 11.75], [1.729328437E12, 26.47933884297519], [1.729328435E12, 14.598425196850389], [1.729328436E12, 43.086419753086446], [1.729328434E12, 48.886363636363626], [1.729328433E12, 15.722222222222229]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.729328442E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6.635849056603779, "minX": 1.0, "maxY": 864.0, "series": [{"data": [[2.0, 6.635849056603779], [3.0, 11.540983606557372], [4.0, 17.438596491228072], [5.0, 21.666666666666668], [6.0, 23.30232558139535], [7.0, 28.37037037037037], [8.0, 35.47368421052631], [9.0, 39.79999999999999], [10.0, 49.937499999999986], [11.0, 55.39999999999999], [12.0, 73.27272727272727], [13.0, 60.28], [14.0, 77.17391304347828], [15.0, 69.22222222222221], [16.0, 117.86956521739131], [17.0, 79.75], [18.0, 84.62500000000001], [19.0, 89.47368421052632], [20.0, 107.80000000000001], [21.0, 110.47368421052632], [22.0, 103.92307692307692], [23.0, 102.72727272727273], [24.0, 117.2], [25.0, 129.08333333333331], [26.0, 126.19999999999999], [27.0, 133.66666666666666], [28.0, 149.8888888888889], [29.0, 161.9090909090909], [30.0, 151.06666666666666], [31.0, 151.99999999999997], [33.0, 159.78947368421052], [32.0, 178.4], [35.0, 197.58333333333334], [34.0, 158.52941176470586], [37.0, 179.00000000000003], [36.0, 193.94117647058823], [39.0, 269.4166666666667], [38.0, 219.40000000000003], [41.0, 221.0625], [40.0, 174.33333333333334], [43.0, 207.16666666666666], [42.0, 207.72727272727272], [45.0, 261.5], [44.0, 223.37500000000003], [46.0, 220.0], [47.0, 222.33333333333334], [48.0, 218.75], [49.0, 206.125], [51.0, 252.625], [50.0, 233.75], [53.0, 234.63636363636363], [52.0, 249.33333333333334], [55.0, 253.1818181818182], [54.0, 260.54545454545456], [57.0, 277.00000000000006], [56.0, 281.50000000000006], [58.0, 228.0], [59.0, 293.875], [61.0, 300.2], [60.0, 299.42857142857144], [63.0, 314.0], [62.0, 378.875], [67.0, 338.90909090909093], [66.0, 328.83333333333337], [65.0, 257.20000000000005], [64.0, 309.5], [71.0, 346.6666666666667], [69.0, 347.8], [68.0, 334.5], [70.0, 340.5], [74.0, 370.57142857142856], [75.0, 377.8461538461538], [73.0, 340.58333333333337], [72.0, 347.0], [79.0, 338.25], [78.0, 349.16666666666674], [76.0, 362.3636363636364], [77.0, 316.57142857142856], [83.0, 384.5], [82.0, 382.6666666666667], [81.0, 376.875], [80.0, 391.2222222222222], [86.0, 373.0], [84.0, 412.7142857142857], [85.0, 418.6363636363636], [87.0, 345.5], [91.0, 438.22222222222223], [90.0, 451.55555555555554], [89.0, 436.0769230769231], [88.0, 437.1666666666667], [95.0, 457.5833333333333], [94.0, 425.8181818181818], [93.0, 450.58333333333337], [92.0, 457.5], [99.0, 489.8571428571429], [98.0, 417.83333333333337], [97.0, 481.625], [96.0, 475.8888888888889], [101.0, 435.0], [103.0, 508.4285714285714], [102.0, 512.4285714285714], [100.0, 495.3333333333333], [105.0, 510.33333333333326], [106.0, 524.0999999999999], [104.0, 527.3333333333334], [107.0, 537.6666666666667], [110.0, 537.1666666666667], [108.0, 533.4], [111.0, 562.5], [109.0, 527.6], [115.0, 577.3333333333334], [113.0, 563.0], [112.0, 547.4], [114.0, 561.0], [119.0, 597.25], [118.0, 624.5], [117.0, 596.5], [116.0, 568.25], [123.0, 617.8], [122.0, 609.0], [121.0, 604.75], [120.0, 611.5], [125.0, 612.8], [127.0, 631.75], [126.0, 627.0], [124.0, 617.6666666666666], [135.0, 673.5], [134.0, 679.25], [133.0, 692.5], [132.0, 449.0], [131.0, 657.0], [130.0, 484.0], [129.0, 685.8], [128.0, 637.0], [143.0, 710.0], [142.0, 699.0], [141.0, 693.5], [140.0, 697.5], [138.0, 864.0], [136.0, 669.6], [139.0, 675.5], [137.0, 654.0], [151.0, 743.5], [149.0, 725.75], [147.0, 724.0], [145.0, 738.0], [146.0, 728.5], [1.0, 6.999999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[34.752272727272874, 168.6931818181818]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 151.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 39081.0, "minX": 1.729328432E12, "maxY": 150199.0, "series": [{"data": [[1.729328442E12, 56626.0], [1.729328432E12, 130040.0], [1.729328441E12, 98230.0], [1.729328439E12, 65463.0], [1.72932844E12, 150199.0], [1.729328438E12, 63577.0], [1.729328437E12, 113193.0], [1.729328435E12, 59407.0], [1.729328436E12, 113688.0], [1.729328434E12, 102888.0], [1.729328433E12, 75731.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.729328442E12, 39081.0], [1.729328432E12, 89730.0], [1.729328441E12, 67780.0], [1.729328439E12, 45163.0], [1.72932844E12, 103654.0], [1.729328438E12, 43857.0], [1.729328437E12, 78103.0], [1.729328435E12, 40992.0], [1.729328436E12, 78453.0], [1.729328434E12, 70988.0], [1.729328433E12, 52241.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.729328442E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13.42380952380953, "minX": 1.729328432E12, "maxY": 447.48571428571427, "series": [{"data": [[1.729328442E12, 19.33057851239669], [1.729328432E12, 133.8021582733812], [1.729328441E12, 13.42380952380953], [1.729328439E12, 447.48571428571427], [1.72932844E12, 320.4392523364486], [1.729328438E12, 54.67647058823527], [1.729328437E12, 127.73966942148766], [1.729328435E12, 68.48031496062991], [1.729328436E12, 212.29218106995884], [1.729328434E12, 239.96363636363634], [1.729328433E12, 73.06172839506173]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.729328442E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13.409523809523812, "minX": 1.729328432E12, "maxY": 447.37857142857166, "series": [{"data": [[1.729328442E12, 19.305785123966956], [1.729328432E12, 133.68705035971223], [1.729328441E12, 13.409523809523812], [1.729328439E12, 447.37857142857166], [1.72932844E12, 320.3894080996885], [1.729328438E12, 54.66176470588235], [1.729328437E12, 127.65702479338833], [1.729328435E12, 68.38582677165356], [1.729328436E12, 212.24279835390956], [1.729328434E12, 239.92272727272731], [1.729328433E12, 73.01851851851852]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.729328442E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.553719008264463, "minX": 1.729328432E12, "maxY": 5.2086330935251794, "series": [{"data": [[1.729328442E12, 0.553719008264463], [1.729328432E12, 5.2086330935251794], [1.729328441E12, 0.5571428571428572], [1.729328439E12, 0.6785714285714287], [1.72932844E12, 0.5919003115264799], [1.729328438E12, 0.7426470588235292], [1.729328437E12, 0.8347107438016529], [1.729328435E12, 0.7244094488188974], [1.729328436E12, 0.633744855967078], [1.729328434E12, 0.8863636363636358], [1.729328433E12, 1.04320987654321]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.729328442E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.729328432E12, "maxY": 1071.0, "series": [{"data": [[1.729328442E12, 63.0], [1.729328432E12, 544.0], [1.729328441E12, 115.0], [1.729328439E12, 670.0], [1.72932844E12, 1071.0], [1.729328438E12, 199.0], [1.729328437E12, 406.0], [1.729328435E12, 229.0], [1.729328436E12, 646.0], [1.729328434E12, 661.0], [1.729328433E12, 224.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.729328442E12, 45.599999999999994], [1.729328432E12, 343.2], [1.729328441E12, 34.60000000000002], [1.729328439E12, 595.0], [1.72932844E12, 680.0], [1.729328438E12, 164.3], [1.729328437E12, 301.0], [1.729328435E12, 200.60000000000002], [1.729328436E12, 475.79999999999995], [1.729328434E12, 487.9], [1.729328433E12, 181.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.729328442E12, 63.0], [1.729328432E12, 485.40999999999957], [1.729328441E12, 112.44999999999993], [1.729328439E12, 667.13], [1.72932844E12, 1023.879999999996], [1.729328438E12, 197.51999999999998], [1.729328437E12, 389.71], [1.729328435E12, 228.72], [1.729328436E12, 550.36], [1.729328434E12, 530.37], [1.729328433E12, 220.22000000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.729328442E12, 56.79999999999998], [1.729328432E12, 387.0], [1.729328441E12, 76.24999999999994], [1.729328439E12, 615.6999999999999], [1.72932844E12, 718.9], [1.729328438E12, 174.75000000000003], [1.729328437E12, 350.94999999999993], [1.729328435E12, 216.39999999999998], [1.729328436E12, 516.4], [1.729328434E12, 502.95], [1.729328433E12, 197.7]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.729328442E12, 5.0], [1.729328432E12, 6.0], [1.729328441E12, 5.0], [1.729328439E12, 30.0], [1.72932844E12, 5.0], [1.729328438E12, 5.0], [1.729328437E12, 5.0], [1.729328435E12, 5.0], [1.729328436E12, 5.0], [1.729328434E12, 5.0], [1.729328433E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.729328442E12, 12.0], [1.729328432E12, 58.5], [1.729328441E12, 6.0], [1.729328439E12, 456.0], [1.72932844E12, 323.0], [1.729328438E12, 16.5], [1.729328437E12, 84.0], [1.729328435E12, 34.0], [1.729328436E12, 180.0], [1.729328434E12, 254.5], [1.729328433E12, 63.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.729328442E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 6.0, "minX": 121.0, "maxY": 456.0, "series": [{"data": [[278.0, 58.5], [136.0, 16.5], [140.0, 456.0], [162.0, 63.5], [321.0, 323.0], [210.0, 6.0], [220.0, 254.5], [243.0, 180.0], [242.0, 84.0], [121.0, 12.0], [127.0, 34.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 321.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 6.0, "minX": 121.0, "maxY": 456.0, "series": [{"data": [[278.0, 58.5], [136.0, 16.5], [140.0, 456.0], [162.0, 63.5], [321.0, 323.0], [210.0, 6.0], [220.0, 254.5], [243.0, 180.0], [242.0, 83.5], [121.0, 12.0], [127.0, 34.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 321.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.729328431E12, "maxY": 201.0, "series": [{"data": [[1.729328431E12, 80.0], [1.729328442E12, 120.0], [1.729328432E12, 200.0], [1.729328441E12, 200.0], [1.729328439E12, 201.0], [1.72932844E12, 199.0], [1.729328438E12, 199.0], [1.729328437E12, 201.0], [1.729328435E12, 200.0], [1.729328436E12, 199.0], [1.729328434E12, 201.0], [1.729328433E12, 200.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.729328442E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 121.0, "minX": 1.729328432E12, "maxY": 321.0, "series": [{"data": [[1.729328442E12, 121.0], [1.729328432E12, 278.0], [1.729328441E12, 210.0], [1.729328439E12, 140.0], [1.72932844E12, 321.0], [1.729328438E12, 136.0], [1.729328437E12, 242.0], [1.729328435E12, 127.0], [1.729328436E12, 243.0], [1.729328434E12, 220.0], [1.729328433E12, 162.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.729328442E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 121.0, "minX": 1.729328432E12, "maxY": 321.0, "series": [{"data": [[1.729328442E12, 121.0], [1.729328432E12, 278.0], [1.729328441E12, 210.0], [1.729328439E12, 140.0], [1.72932844E12, 321.0], [1.729328438E12, 136.0], [1.729328437E12, 242.0], [1.729328435E12, 127.0], [1.729328436E12, 243.0], [1.729328434E12, 220.0], [1.729328433E12, 162.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.729328442E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 121.0, "minX": 1.729328432E12, "maxY": 321.0, "series": [{"data": [[1.729328442E12, 121.0], [1.729328432E12, 278.0], [1.729328441E12, 210.0], [1.729328439E12, 140.0], [1.72932844E12, 321.0], [1.729328438E12, 136.0], [1.729328437E12, 242.0], [1.729328435E12, 127.0], [1.729328436E12, 243.0], [1.729328434E12, 220.0], [1.729328433E12, 162.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.729328442E12, "title": "Total Transactions Per Second"}},
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

