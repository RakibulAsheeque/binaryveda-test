/**
 * @swagger
 * definitions:
 *   signupBody:
 *     application/json:
 *     type: object
 *     required:
 *        - name
 *        - email
 *        - password
 *     properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *          password:
 *            type: string
 *            format: password
 *          age:
 *            type: integer
 *          address:
 *            type: object
 *            properties:
 *              street:
 *                  type: string
 *              city:
 *                  type: string
 *              pin:
 *                  type: integer
 *                  format: int64
 */

 /**
 * @swagger
 * /sign-up:
 *   post:
 *     description: Create new user in the database
 *     tags: 
 *        - User Sign Up
 *     requestBody:
 *       description: Provide details of the new user 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/signupBody'
 *     responses:
 *       201:
 *         description: User has signed up successfully
 *       400:
 *         description: Any kind of invalid details if provided
 *       500:
 *         description: Error occured while processing your request
 */
