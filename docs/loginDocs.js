/**
 * @swagger
 * definitions:
 *   loginBody:
 *     application/json:
 *     type: object
 *     required:
 *        - email
 *        - password
 *     properties:
 *          email:
 *            type: string
 *            format: email
 *          password:
 *            type: string
 *            format: password
 */

 /**
 * @swagger
 * /login:
 *   post:
 *     description: Sign in users with correct credentials
 *     tags: 
 *        - User Sign In
 *     requestBody:
 *       description: Provide details for user login 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/loginBody'
 *     responses:
 *       200:
 *         description: User details will be provided in the response
 *       404:
 *         description: Email not found
 *       401:
 *         description: Incorrect password
 *       500:
 *         description: Error occured while processing your request
 */
