const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());
// app.get();
// app.post();
// app.put();
// app.delete();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];
app.get("/", (request, response) => {
  response.send("Hello World!!!!!!!!!!!!");
});
app.get("/api/courses", (request, response) => {
  response.send(courses);
});

app.get("/api/courses/:id", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course)
    response.status(404).send("The course with the given ID was not found");
  response.send(course);
});

app.get("/api/posts/:year/:month", (request, response) => {
  response.send(request.query);
});

app.post("/api/courses", (request, response) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const result = schema.validate(request.body);

  if (result.error) {
    response.status(400).send(result.error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: request.body.name,
  };
  courses.push(course);
  response.send(course);
});

app.put("/api/courses/:id", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course)
    response.status(404).send("The course with the given ID was not found");

  const { error } = validateCourse(request.body);

  if (error) {
    response.status(400).send(error.details[0].message);
    return;
  }
  course.name = request.body.name;
  response.send(course);
});

app.delete("/api/courses/:id", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course)
    return response
      .status(404)
      .send("The course with the given ID was not found");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  response.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}
//Ports
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
