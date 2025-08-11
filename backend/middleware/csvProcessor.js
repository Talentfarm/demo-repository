
const csv = require('csv-parser');
const fs = require('fs');

const processPolicyCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        // Clean and parse numeric values
        const cleanNumber = (value) => {
          if (!value) return 0;
          return parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0;
        };

        // Process each row according to your CSV structure
        results.push({
          // Basic Info
          farmerId: data['Farmer ID'] || data['farmerId'],
          name: data['Name'] || data['name'],
          
          // Location Info
          village: data['Village'] || data['village'],
          district: data['District'] || data['district'],
          state: data['State'] || data['state'],
          location: `${data['District'] || ''}, ${data['State'] || ''}`.replace(/^,\s*|,\s*$/g, ''), // Combined location
          
          // Contact Info
          contactNumber: data['Contact Number'] || data['contactNumber'],
          aadhaarNumber: data['Aadhaar Number'] || data['aadhaarNumber'],
          
          // Land Info
          landSurveyNumber: data['Land Survey Number'] || data['landSurveyNumber'],
          landOwnershipStatus: data['Land Ownership Status'] || data['landOwnershipStatus'],
          landInAcres: cleanNumber(data['Land in Acres'] || data['landInAcres']),
          
          // Crop Info
          crop: data['Crop'] || data['crop'],
          previousCrop: data['Previous Crop'] || data['previousCrop'],
          sowingDate: data['Sowing Date'] || data['sowingDate'],
          harvestingDate: data['Harvesting Date'] || data['harvestingDate'],
          expectedYield: cleanNumber(data['Expected Yield'] || data['expectedYield']),
          season: data['Season'] || data['season'],
          
          // Policy Info
          policy: data['Policy'] || data['policy'],
          policyNumber: data['Policy Number'] || data['policyNumber'],
          policyStartDate: data['Policy Start Date'] || data['policyStartDate'],
          policyEndDate: data['Policy End Date'] || data['policyEndDate'],
          premiumAmount: cleanNumber(data['Premium Amount'] || data['premiumAmount']),
          coverageAmount: cleanNumber(data['Coverage Amount'] || data['coverageAmount']),
          
          // Claim Info
          claimRaised: data['Claim Raised'] || data['claimRaised'],
          claimAmount: cleanNumber(data['Claim Amount'] || data['claimAmount']),
          
          // Coordinates
          latitude: data['latitude'] || data['Latitude'],
          longitude: data['longitude'] || data['Longitude'],
          
          // Status
          status: 'active'
        });
      })
      .on('end', () => {
        console.log(`Processed ${results.length} policy records`);
        resolve(results);
      })
      .on('error', reject);
  });
};

// Helper function to get location string for weather API
const getLocationForWeather = (policyData) => {
  if (policyData.district && policyData.state) {
    return `${policyData.district}, ${policyData.state}`;
  } else if (policyData.district) {
    return policyData.district;
  } else if (policyData.village && policyData.state) {
    return `${policyData.village}, ${policyData.state}`;
  } else if (policyData.state) {
    return policyData.state;
  }
  return null;
};

module.exports = { 
  processPolicyCSV,
  getLocationForWeather 
};