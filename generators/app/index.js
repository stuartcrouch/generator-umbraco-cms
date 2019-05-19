var Generator = require('yeoman-generator');
var chalk = require('chalk');
var path = require('path');
var readdirSyncRecursive = require('./readdir');
var convertFilename = require('./filename_convert');
const buildOptions = require('./build_options');

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
                                                                                         
this.log(chalk.bold.blue("                             `:<|}wUGMO66OdZPUy}|~,`                             "));
this.log(chalk.bold.blue("                        .^VM8#@@@@@@@@@@@@@@@@@@@@@#gqur.                        "));
this.log(chalk.bold.blue("                    .rz$#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#Dw*'                    "));
this.log(chalk.bold.blue("                 _xd#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#Mv-                 "));
this.log(chalk.bold.blue("              _u8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@$i.              "));
this.log(chalk.bold.blue("            :K#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#z,            "));
this.log(chalk.bold.blue("          ,3#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#o_          "));
this.log(chalk.bold.blue("         r#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BY         "));
this.log(chalk.bold.blue("       -G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o.       "));
this.log(chalk.bold.blue("      =Q@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0:      "));
this.log(chalk.bold.blue("     )#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B<     "));
this.log(chalk.bold.blue("    |#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#^    "));
this.log(chalk.bold.blue("   *#@@@@@@@@@@@@@B*~*v}wD@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Qy}v*=)#@@@@@@@@@@@@@B=   "));
this.log(chalk.bold.blue("  !#@@@@@@@@@@@@@@u      w@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Z      o@@@@@@@@@@@@@@Q,  "));
this.log(chalk.bold.blue(" `d@@@@@@@@@@@@@@#=     `$@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#      *@@@@@@@@@@@@@@@3  "));
this.log(chalk.bold.blue(" )@@@@@@@@@@@@@@@E`     =#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-     `Q@@@@@@@@@@@@@@#~ "));
this.log(chalk.bold.blue(" M@@@@@@@@@@@@@@@z      x@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*      G@@@@@@@@@@@@@@@U "));
this.log(chalk.bold.blue(",B@@@@@@@@@@@@@@@x      o@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@}      u@@@@@@@@@@@@@@@8'"));
this.log(chalk.bold.blue("*@@@@@@@@@@@@@@@@*      M@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@z      v@@@@@@@@@@@@@@@#!"));
this.log(chalk.bold.blue("x@@@@@@@@@@@@@@@@=      d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@3      r@@@@@@@@@@@@@@@@^"));
this.log(chalk.bold.blue("]@@@@@@@@@@@@@@@#:      d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@3      *@@@@@@@@@@@@@@@@*"));
this.log(chalk.bold.blue(")@@@@@@@@@@@@@@@@~      q@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@k      r@@@@@@@@@@@@@@@@<"));
this.log(chalk.bold.blue("!#@@@@@@@@@@@@@@@)      u@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@v      i@@@@@@@@@@@@@@@B-"));
this.log(chalk.bold.blue("`E@@@@@@@@@@@@@@@V      !#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-      m@@@@@@@@@@@@@@@M "));
this.log(chalk.bold.blue(" }@@@@@@@@@@@@@@@0`      }@@@@@@@@@@@@@@@@@@@@@@@@@@@@@K      .Q@@@@@@@@@@@@@@@| "));
this.log(chalk.bold.blue(" -Q@@@@@@@@@@@@@@@]       uB@@@@@@@@@@@@@@@@@@@@@@@@@Qi`      u@@@@@@@@@@@@@@@E` "));
this.log(chalk.bold.blue("  |@@@@@@@@@@@@@@@B~       `^uKdDQB###########BQDZUT~`       r#@@@@@@@@@@@@@@#^  "));
this.log(chalk.bold.blue("  `o@@@@@@@@@@@@@@@#x`             ``.......``             `}#@@@@@@@@@@@@@@@u   "));
this.log(chalk.bold.blue("   `Z@@@@@@@@@@@@@@@@0v.                                 -]8@@@@@@@@@@@@@@@@K`   "));
this.log(chalk.bold.blue("    .d@@@@@@@@@@@@@@@@@#du<_`                       `_^}6#@@@@@@@@@@@@@@@@@3`    "));
this.log(chalk.bold.blue("     `K@@@@@@@@@@@@@@@@@@@@@BgRqmzVT}Yiiiii}}uVzKMR8#@@@@@@@@@@@@@@@@@@@@@w`     "));
this.log(chalk.bold.blue("       ^Q@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8=       "));
this.log(chalk.bold.blue("        -m@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@O'        "));
this.log(chalk.bold.blue("          ]B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Q|`         "));
this.log(chalk.bold.blue("           'YQ@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Q]`           "));
this.log(chalk.bold.blue("             `vE@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@O)`             "));
this.log(chalk.bold.blue("                !yQ@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gV:                "));
this.log(chalk.bold.blue("                  `=uE#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#6T!                   "));
this.log(chalk.bold.blue("                      .*VO#@@@@@@@@@@@@@@@@@@@@@@@@@@@#Eu*.                      "));
this.log(chalk.bold.blue("                          `:)uKdgB#@@@@@@@@@@@#BgdUTr:`                          "));
this.log(chalk.bold.blue("                                    `'.---.'`                                    "));                                                                                                                    
    }

    async prompting() {
      this.props = await this.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Your project name',
          default: this.appname, // default to current folder name
          store: true,
        },
        {
          type: 'input',
          name: 'companyName',
          message: 'Your company name',
          default: 'company',
          store: true,
        },
        {
          type: 'password',
          name: 'backOfficePassword',
          message: 'backOfficePassword',
          default: "0123456789",
          store: false,
        },
      ]);
    };

    writing()
    {
      this.log("Deploying files");
      const options = buildOptions(this.props);
      this.log(options);

      const sourceRoot = this.sourceRoot();
      const files = readdirSyncRecursive(sourceRoot);
      const filenameConvertOptions = {
        name: options.name,
        templateName: 'packagebuilder',
      };
    
      this.log("calculating file changes - this may take a minute....");
      files.forEach((file) => {
        var relativeFile = path.relative(sourceRoot, file);
        var relativeDestination = convertFilename(relativeFile, filenameConvertOptions);
        var destPath = this.destinationPath(relativeDestination);

        switch (path.extname(file)) {
          case '.csproj':
          case '.sln':
          case '.cs': 
            this.log ("converting " + file);
            this.fs.copyTpl(file, destPath, options, { delimiter: '?' });
            break;
          default:
            this.fs.copy(file, destPath);
            break;
        };
      });
    }

    install()
    {
      this.log("restore packages");
      this.spawnCommandSync(
        "nuget",
        ["restore"]
      );

      
      this.log("run build");
      
      // Capture path to build tool
      const result = this.spawnCommandSync (
        "nuget",
        ["restore"],
        { stdio: [process.stdout]}
      );

      var output = result.stdout.toString();
      var myRegexp = /' from '(.*)'./;
      var match = myRegexp.exec(output);
      var MSBuildToolsPath = match[1].trim();

      // Run the build tool
      this.log(MSBuildToolsPath);
      this.spawnCommandSync(
        MSBuildToolsPath + "\\msbuild",
      );

      // Run Chauffeur
      this.log("run chauffeur");
      this.spawnCommandSync(
        this.props.name + "\\bin\\Chauffeur.Runner.exe",
        ["delivery", "-p:adminpwd=" + this.props.backOfficePassword]
      )
    };

    end() {
      this.log("Deleting 'nuget.exe'. It's only needed for a yeoman installation. Yeoman may ask you to confirm.")
      this.fs.delete("nuget.exe");

      this.log("all done - You now have a working umbraco.");
      this.log("You can access the back office with :-");
      this.log("  username: admin");
      this.log("  password: " + this.props.backOfficePassword );
    }
};