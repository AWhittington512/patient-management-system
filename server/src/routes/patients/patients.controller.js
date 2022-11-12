const { addPatient, getAllPatients, getPatient, updatePatient } = require("../../models/patients/patients.model");

async function httpGetAllPatients(req, res) {
  return res.status(200).json(await getAllPatients());
}

async function httpGetPatientById(req, res)
{
  // Get the body of the http request
  info = req.body;
  // Check if the required field is present
  if (!info.id)
  {
    return res.status(400).json({
      error: "Missing id.",
    });
  }
  try
  {
    // Fetch the user from the db
    const id = info.id;
    patient = await getPatient(id);

    // Check if we found a patient
    if(!patient._id)
    {
      // If not, error out
      return res.status(400).json({
        error: "Couldn't find patient.",
      });
    }

    // If so, return the patient
    return res.status(200).json(patient);
  }
  catch (err)
  {
    return res.status(500).json({
      error: "Error searching patient.",
    });
  }
}

async function httpUpdatePatient(req, res)
{
  // Get the updated patient info
  patientUpdateInfo = req.body;
  // Check the patient info is valid
  if(!patientUpdateInfo._id)
  {
    return res.status(400).json({
      error: "Missing patient info.",
    });
  }

  // Try to update the patient
  try
  {
    // Try to update the user
    updatedPatient = await updatePatient(patientUpdateInfo);
    // Return the patient
    return res.status(200).json(updatedPatient);
  }
  catch (err)
  {
    return res.status(500).json({
      error: "Error updating patient.",
    });
  }
}

module.exports = {
  httpGetAllPatients,
  httpGetPatientById,
  httpUpdatePatient,
};
