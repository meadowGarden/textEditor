package com.joma.TEdit.config;

import com.joma.TEdit.entity.User;
import com.joma.TEdit.entity.Document;
import com.joma.TEdit.repository.UserRepository;
import com.joma.TEdit.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class InitialDataConfig {
    private final UserRepository userRepository;
    private final DocumentRepository documentRepository;

    @Autowired
    public InitialDataConfig(UserRepository userRepository,
                             DocumentRepository documentRepository) {
        this.userRepository = userRepository;
        this.documentRepository = documentRepository;
    }

    @Bean
    public CommandLineRunner documentCreator() {
        return runner -> {
            final List<Integer> addedDocuments = addDocuments();
            addUsers(addedDocuments);

        };
    }

    @Transactional
    private void addUsers(List<Integer> addedDocuments) {
        final List<Integer> addedUsers = addUsers();

        for (int i = 0; i < addedUsers.size(); i++) {
            int userID = addedUsers.get(i);
            User user = userRepository.findById(userID)
                    .orElseThrow();
            int documentID = addedDocuments.get(i);
            Document document = documentRepository.findById(documentID)
                    .orElseThrow();
            user.getDocuments().add(document);
            document.setUser(user);
            documentRepository.save(document);
        }
    }

    private List<Integer> addUsers() {
        final List<Integer> addedUsers = new ArrayList<>();
        addedUsers.add(addUser("hipocrite","Rebecca", "Kuang", "pass"));
        addedUsers.add(addUser("pointdexter", "Dexter", "Gabriel", "pass"));
        addedUsers.add(addUser("wotw","Martha", "Wells", "pass"));
        addedUsers.add(addUser("pinskuviene","Sarah", "Pinsker", "pass"));
        addedUsers.add(addUser("onTheCross","Mary", "Kowai", "pass"));
        addedUsers.add(addUser("noriko","Nora", "Jemisin", "pass"));
        addedUsers.add(addUser("ca","Charlie", "Anders", "pass"));
        addedUsers.add(addUser("mori","Naomi", "Novik", "pass"));
        return addedUsers;
    }

    public int addUser(String userName, String firstName, String lastName, String password) {
        final User userToAdd = new User(userName, firstName, lastName, password);
        final User addedUser = userRepository.save(userToAdd);
        return addedUser.getId();
    }

    private List<Integer> addDocuments() {
        final List<Integer> addedDocuments = new ArrayList<>();
        addedDocuments.add(addDocument("Babel: Or the Necessity of Violence' Revolution", "a"));
        addedDocuments.add(addDocument("A Master of Djinn", "b"));
        addedDocuments.add(addDocument("Network Effect", "c"));
        addedDocuments.add(addDocument("A Song for a New Day", "d"));
        addedDocuments.add(addDocument("The Calculating Stars", "e"));
        addedDocuments.add(addDocument("The Stone Sky", "f"));
        addedDocuments.add(addDocument("All the Birds in the Sky", "g"));
        addedDocuments.add(addDocument("Uprooted", "h"));
        return addedDocuments;
    }

    private int addDocument(String title, String body) {
        final Document document = new Document(title, body);
        final Document savedDocument = documentRepository.save(document);
        return savedDocument.getId();
    }
}
