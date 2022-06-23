package co.edu.escuelaing.reactprimerlive;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WebSiteController {
    
    @Resource
    private HttpServletRequest request;

    public static void main(String[] args) {
        SpringApplication.run(WebSiteController.class, args);
    }

    @RequestMapping(value = "/status", method = RequestMethod.GET, produces = "application/json")
    public String status() {
        sessionManagement();
        String name = (String) request.getSession().getAttribute("name");
        return "{\"status\":\"Greetings from Spring Boot. "
                + name + ". "
                + java.time.LocalDate.now() + ", "
                + java.time.LocalTime.now()
                + ". " + "The server is Runnig!\"}";
    }

    @GetMapping("/setname")
    public String setName(@RequestParam(value = "name", defaultValue = "Anónimo") String name) {
        request.getSession().setAttribute("name", name);
        return String.format("Hello %s!", name);
    }

    public void sessionManagement() {
        System.out.println(request.getSession(true).getId());
    }

}
