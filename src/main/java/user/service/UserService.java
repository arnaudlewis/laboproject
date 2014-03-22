package user.service;

import user.User;
import user.dataAccess.DaoUser;
import user.dto.CreateUserRequestDTO;
import user.dto.CreateUserResponseDTO;
import user.dto.LoginRequestDTO;
import user.dto.LoginResponseDTO;

import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("/user")
public class UserService {

    @POST
    @Path("/signin")
    public CreateUserResponseDTO signin(CreateUserRequestDTO request) {

        CreateUserResponseDTO reponse = new CreateUserResponseDTO();
        User createdUser = createUserFromSignUpData(request);
        reponse.setId_user(DaoUser.getInstance().insert(createdUser));
        return reponse;
    }

    private User createUserFromSignUpData(CreateUserRequestDTO signUpData) {
        User user = new User();
        user.setCreationDate(signUpData.getCreationDate());
        user.setFirstname(signUpData.getFirstname());
        user.setLastname(signUpData.getLastname());
        user.setEmail(signUpData.getEmail());
        user.setBirthdate(signUpData.getBirthday());
        user.setUsername(signUpData.getUsername());
        user.setPassword(signUpData.getPassword());
        return user;
    }

    @Path("/connect")
    @POST
    public LoginResponseDTO authentication(LoginRequestDTO request) {

        LoginResponseDTO response = new LoginResponseDTO();

        User loggedUser = DaoUser.getInstance().authentication(request.getUsername(), request.getPassword());
        if (loggedUser != null) {
            setUserToResponse(response, loggedUser);
        }
        return response;
    }

    private void setUserToResponse(LoginResponseDTO response, User loggedUser) {
        response.setUsername(loggedUser.getUsername());
        response.setFirstname(loggedUser.getFirstname());
        response.setLastname(loggedUser.getLastname());
        response.setBirthdate(loggedUser.getBirthdate());
        response.setCreationDate(loggedUser.getCreationDate());
        response.setEmail(loggedUser.getEmail());
    }
}




