using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "employees",
                columns: table => new
                {
                    Employeeid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    DOB = table.Column<string>(nullable: true),
                    DOJ = table.Column<string>(nullable: true),
                    Salary = table.Column<int>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employees", x => x.Employeeid);
                });

            migrationBuilder.CreateTable(
                name: "leaves",
                columns: table => new
                {
                    Leaveid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    MaximumLeavesAllowed = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_leaves", x => x.Leaveid);
                });

            migrationBuilder.CreateTable(
                name: "employeeLeaveMappings",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Employeeid = table.Column<int>(nullable: false),
                    Leaveid = table.Column<int>(nullable: false),
                    LeaveStartDate = table.Column<string>(nullable: true),
                    LeaveEndDate = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employeeLeaveMappings", x => x.id);
                    table.ForeignKey(
                        name: "FK_employeeLeaveMappings_employees_Employeeid",
                        column: x => x.Employeeid,
                        principalTable: "employees",
                        principalColumn: "Employeeid",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_employeeLeaveMappings_leaves_Leaveid",
                        column: x => x.Leaveid,
                        principalTable: "leaves",
                        principalColumn: "Leaveid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_employeeLeaveMappings_Employeeid",
                table: "employeeLeaveMappings",
                column: "Employeeid");

            migrationBuilder.CreateIndex(
                name: "IX_employeeLeaveMappings_Leaveid",
                table: "employeeLeaveMappings",
                column: "Leaveid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employeeLeaveMappings");

            migrationBuilder.DropTable(
                name: "employees");

            migrationBuilder.DropTable(
                name: "leaves");
        }
    }
}
