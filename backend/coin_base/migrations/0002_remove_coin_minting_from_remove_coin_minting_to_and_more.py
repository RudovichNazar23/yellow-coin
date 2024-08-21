# Generated by Django 5.0.7 on 2024-08-21 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coin_base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coin',
            name='minting_from',
        ),
        migrations.RemoveField(
            model_name='coin',
            name='minting_to',
        ),
        migrations.AddField(
            model_name='coin',
            name='year_of_issue',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
    ]
