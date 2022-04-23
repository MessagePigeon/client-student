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
            bool delayTimeParseSuccess = uint.TryParse(delayTimeInput.Text, out uint delayTime);
            if (!delayTimeParseSuccess)
            {
                MessageBox.Show(@"Delay Time Must Be Number", @"Delay Time Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            var popupForm = new Form2(titleInput.Text, messageInput.Text, delayTime);
            popupForm.Show();
        }
    }
}