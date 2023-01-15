import express from "express";
import patientService from "../services/patientService";
import toNewPatient from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("getPatients");
  const patients = patientService.getPublicPatients();
  res.json(patients);
});

router.get("/:id", (req, res) => {
  const id = req.params.toString();
  console.log("getPatient");
  const patient = patientService.getPatientById(id);
  console.log(patient);
  res.json(patient);
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";

    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }

    res.status(400).send(errorMessage);
  }
});

export default router;
