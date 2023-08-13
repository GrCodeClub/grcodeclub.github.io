<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.8">
        <meta property="og:image" content="https://grcodeclub.github.io/file/background/linux.png"/>
        <meta property="og:title" content="Linux">
        <script src="https://grcodeclub.github.io/javascript/jquery.js"></script>
        <script src="https://grcodeclub.github.io/system/javascript/menu.js"></script>
        <link rel="stylesheet" href="https://grcodeclub.github.io/css/header_and_footer.css">
        <link rel="stylesheet" href="https://grcodeclub.github.io/css/main.css">
        <link rel="stylesheet" href="https://grcodeclub.github.io/css/text.css">
        <link rel="stylesheet" href="https://grcodeclub.github.io/css/table.css">
        <link rel="stylesheet" href="https://grcodeclub.github.io/css/layout.css">
        <link rel="stylesheet" href="https://grcodeclub.github.io/css/list.css">
        <link rel='icon' type='image/png' href='https://grcodeclub.github.io/file/logo/black_logo.png'>
        <title> GrCode Club</title>
    </head>


    <body>

    <div class="container">
        <section class="show_desktop"> <!--Αρχή Εμφάνιση Υπολογιστή-->
            <div class="Header"> <!--Αρχή Επικεφαλίδας-->
                <table>
                    <tr>
                        <td><img src="https://grcodeclub.github.io/file/logo_and_graphic/logo.png" class="logo"/></td>
                        <td><h1 class="header_text"><span class="header_text">  GrCode Club </span></h1></td>
                        <td><a href="https://github.com/GrCodeClub/grcodeclub.github.io/edit/main/system/main.html" target="_blank"><img src="https://grcodeclub.github.io/file/logo_and_graphic/edit.png"  width="60px"></a></td>
                    </tr>
                </table> 
            </div> <!--Τέλος Επικεφαλίδας-->
           
            <div class="Menu"> <!--Αρχή Menu-->
                <div id="sidebarMenu" style="  overflow: auto;">
                    <ul class="sidebarMenuInner">
                    </ul>
                  </div>
            </div><!--Τέλος Menu-->

        </section> <!--Τέλος Εμφάνιση Υπολογιστή-->

        <section class="show_mobile">  <!--Αρχή εμφάνιση σε κινητά-->
            <div class="Header"> <!--Αρχή Επικεφαλίδας σε κινητά-->
                <table>
                    <tr>
                        <td><img src="https://grcodeclub.github.io/file/logo_and_graphic/logo.png" class="logo"/></td>
                        <td><h1 class="header_text"><span class="header_text">  GrCode Club </span></h1></td>
                    </tr>
                </table> 
            </div> <!--Τέλος Επικεφαλίδας σε κινητά -->
            <table>  <!--Αρχή Menu σε κινητά-->
                <tr>
                    <td>
                        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                        <label for="openSidebarMenu" class="sidebarIconToggle">
                          <div class="spinner diagonal part-1"></div>
                          <div class="spinner horizontal"></div>
                          <div class="spinner diagonal part-2"></div>
                        </label>
                        <div id="sidebarMenu" style="overflow: auto;">
                          <ul class="sidebarMenuInner">
                          </ul>
                        </div>
                        </td>
                    </tr>
            </table> <!--Τέλος Menu σε κινητά-->
        </section> <!--Τέλος εμφάνιση σε κινητά-->


        <div class="Text"> <!--Αρχή Κειμένου-->
            <a href="../linux.html"><img src="https://grcodeclub.github.io/file/logo_and_graphic/back.png" class="logo_back"></a>
            <div class="text_bg"> <!-- Αρχή Background Κειμένου-->
                <h1 class="title">Εντολές Δικτύου</h1>    
                <div class="search"><input type="input" class="form__field" placeholder="Αναζήτηση" id='searchInput'/></div>
                <br>
                <table class="style2" id="table">
                    <tr>
                      <th>Εντολή</th>
                      <th>Περιγραφή</th>
                    </tr>
                    <tr>
                      <td><a href="./network_cmd/ifconfig_cmd.html" class="link_menu">ifconfig</a></td>
                      <td>Εμφανίζει τις πληροφορίες δικτύου για τις διεπαφές δικτύου.</td>
                    </tr>
                    <tr>
                      <td><a href="./network_cmd/ip_cmd.html" class="link_menu">ip</a></td>
                      <td>Παρέχει εργαλεία για την ρύθμιση των δικτυακών παραμέτρων, όπως διευθύνσεις IP, πύλες, δρομολόγηση και άλλες δικτυακές ρυθμίσεις.</td>
                    </tr>
                    <tr>
                      <td>netstat</td>
                      <td>Εμφανίζει πληροφορίες για τις δικτυακές συνδέσεις, τις πόρτες που ακούν και άλλα στατιστικά δικτύου.</td>
                    </tr>
                    <tr>
                      <td>ping</td>
                      <td>Αποστέλλει μια ICMP αίτηση προς έναν καθορισμένο προορισμό για να ελέγξει την συνδεσιμότητα και τον χρόνο απόκρισης.</td>
                    </tr>
                    <tr>
                      <td>traceroute</td>
                      <td>Εμφανίζει τη διαδρομή που ακολουθείται από ένα πακέτο κατά τη μετάδοσή του από την αρχική πηγή προς τον προορισμό.</td>
                    </tr>
                    <tr>
                      <td>nslookup</td>
                      <td>Εκτελεί αντίστροφη αναζήτηση DNS για να ανακτήσει πληροφορίες σχετικά με έναν καθορισμένο κεντρικό διακομιστή ονομάτων.</td>
                    </tr>
                    <tr>
                      <td>ssh</td>
                      <td>Επιτρέπει ασφαλή απομακρυσμένη σύνδεση με έναν εξυπηρετητή μέσω του πρωτοκόλλου SSH.</td>
                    </tr>
                    <tr>
                      <td>scp</td>
                      <td>Αντιγράφει αρχεία ασφαλούς απομακρυσμένης σύνδεσης μεταξύ του τοπικού και απομακρυσμένου συστήματος.</td>
                    </tr>
                    <tr>
                      <td>wget</td>
                      <td>Λήψη αρχείων από το διαδίκτυο μέσω του πρωτοκόλλου HTTP, HTTPS και FTP.</td>
                    </tr>
                    <tr>
                      <td>curl</td>
                      <td>Εκτελεί αιτήσεις HTTP, HTTPS, FTP και άλλες από τη γραμμή εντολών και εμφανίζει την απόκριση.</td>
                    </tr>
                    <tr>
                      <td>iptables</td>
                      <td>Διαμόρφωση των κανόνων του τείχους προστασίας (firewall).</td>
                    </tr>
                  </table>
                <script src="https://grcodeclub.github.io/javascript/search_table_row_cells_0.js"></script>
            </div><!-- Τέλος Background Κειμένου-->
        </div> <!--Τέλος Κειμένου-->

    </div> <!--Τέλος container-->
        
        <!-- Footer -->
        <footer>
            <table class="add_footer"></table>
            <script src="https://grcodeclub.github.io/javascript/footer.js"></script>       
        </footer>
    </body>
</html>
