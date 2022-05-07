using System;
using System.CodeDom;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MessagePigeonClientStudentPopup
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            Icon = Properties.Resources.pigeon_logo;
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            bool delayTimeParseSuccess = uint.TryParse(closeDelayInput.Text, out uint closeDelay);
            if (!delayTimeParseSuccess)
            {
                MessageBox.Show(@"Close Delay Time Must Be Number", @"Close Delay Time Error", MessageBoxButtons.OK,
                    MessageBoxIcon.Error);
                return;
            }

            bool fontSizeParseSuccess = uint.TryParse(fontSizeInput.Text, out uint fontSize);
            if (!fontSizeParseSuccess || fontSize <= 0)
            {
                MessageBox.Show(@"Font Size Must Be A Positive Number", @"Font Size Error", MessageBoxButtons.OK,
                    MessageBoxIcon.Error);
                return;
            }

            var popupForm = new Form2(titleInput.Text, messageInput.Text, closeDelay, fontSize);
            popupForm.Show();
        }
    }
}